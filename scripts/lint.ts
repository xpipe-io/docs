import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import GithubSlugger from 'github-slugger';
import { source } from '@/lib/source';

type AnySource = typeof source;
type AnyPage = ReturnType<AnySource['getPages']>[number];

async function checkLinks() {
    const scanned = await scanURLs({
        populate: {
            '[[...slug]]': await Promise.all(
                source.getPages().map(async (page) => {
                    return {
                        value: {
                            slug: page.slugs,
                        },
                        hashes: await getHeadings(page),
                    };
                }),
            ),
        },
    });

    console.log(`collected ${scanned.urls.size} URLs, ${scanned.fallbackUrls.length} fallbacks`);

    printErrors(
        await validateFiles([...(await getFiles(source))], {
            scanned,
            markdown: {
                components: {
                    Card: { attributes: ['href'] },
                },
            },
            checkRelativePaths: 'as-url',
        }),
        true,
    );
}

async function getHeadings(page: AnyPage): Promise<string[]> {
    const raw = await page.data.getText('raw');
    return getHeadingIds(raw);
}

function getHeadingIds(content: string): string[] {
    // Drop YAML frontmatter.
    const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
    const slugger = new GithubSlugger();
    const ids: string[] = [];
    let inFence = false;

    for (const line of body.split('\n')) {
        if (/^\s*(```|~~~)/.test(line)) {
            inFence = !inFence;
            continue;
        }
        if (inFence) continue;

        const heading = line.match(/^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
        if (!heading) continue;

        let text = heading[2];

        // Explicit id: `## Heading [#custom-id]`
        const customId = text.match(/\[#([^\]\s]+)\]/);
        text = text.replace(/\[#[^\]]+\]/, '');

        // TOC visibility markers, not part of the visible text or id.
        text = text.replace(/\[!?toc\]/gi, '');

        // Reduce inline markdown to its plain text.
        text = text
            .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
            .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/[*_~]/g, '')
            .trim();

        ids.push(customId ? customId[1] : slugger.slug(text));
    }

    return ids;
}

async function getFiles(source: AnySource) {
    const files: FileObject[] = [];
    for (const page of source.getPages()) {
        files.push({
            data: page.data,
            url: page.url,
            path: page.data.info.fullPath,
            content: await page.data.getText('raw'),
        });
    }

    return files;
}

void checkLinks();
