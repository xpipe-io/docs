import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import {DocsLayout} from "fumadocs-ui/layouts/docs";
import {source} from "@/lib/source";
import {baseOptions} from "@/app/layout.config";
import { Analytics } from "@vercel/analytics/react";
import {Viewport} from "next";
import { baseUrl, createMetadata } from '@/lib/metadata';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = createMetadata({
    title: {
        template: '%s | XPipe Docs',
        default: 'XPipe Docs',
    },
    description: 'Your entire server infrastructure at your fingertips',
    metadataBase: baseUrl,
});

export const viewport: Viewport = {
    width: "device-width",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
            <DocsLayout tree={source.pageTree} {...baseOptions}>
                {children}
            </DocsLayout>
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
