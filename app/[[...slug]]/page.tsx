import {openapi, source} from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import {Metadata} from "next/types";
import NotFound from "next/dist/client/components/builtin/not-found";

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return (<NotFound />)

    const { APIPage } = await import('@/components/api-page');

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
              tableOfContent={{
                style: 'clerk',
                single: false,
              }} editOnGithub={{
      owner: 'xpipe-io',
      repo: 'docs',
      sha: 'master',
      path: `content/${page.path}`,
    }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Callout, APIPage }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[[...slug]]'>): Promise<Metadata> {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            url: `/${page.slugs.join('/')}`,
        },
    };
}
