import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            url: 'https://docs.xpipe.io',
            images: 'https://docs.xpipe.io/images/social.png',
            siteName: 'XPipe Docs',
            ...override.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: 'https://docs.xpipe.io/images/social.png',
            ...override.twitter,
        },
    };
}

export const baseUrl =
    process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
        ? new URL('http://localhost:3000')
        : new URL(`https://${process.env.VERCEL_URL}`);