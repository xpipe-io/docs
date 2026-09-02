import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { source } from '@/lib/source';

type AnySource = typeof source;

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

async function getHeadings(page: AnySource['$inferPage']): Promise<string[]> {
    console.log(page)
    if (page.data.type !== 'docs') return [];
    const { _exports, toc } = await page.data.load();
    const headings = toc.map((item) => item.url.slice(1));
    const elementIds = _exports?.elementIds;
    if (Array.isArray(elementIds)) {
        headings.push(...elementIds);
    }

    return headings;
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