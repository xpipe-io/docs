import {
    multiple,
} from 'fumadocs-core/source';
import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { openapiPlugin, openapiSource } from 'fumadocs-openapi/server';
import path from 'node:path';

export const source = loader(
    multiple({
        docs: docs.toFumadocsSource(),
    }),
    {
        baseUrl: '/',
        plugins: [lucideIconsPlugin()],
    },
);

