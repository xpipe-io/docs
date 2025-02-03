import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import {DocsLayout} from "fumadocs-ui/layouts/docs";
import {source} from "@/lib/source";
import {baseOptions} from "@/app/layout.config";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
});

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
