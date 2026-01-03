import {
    multiple,
} from 'fumadocs-core/source';
import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { openapiPlugin, openapiSource } from 'fumadocs-openapi/server';
import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({});

export const source = loader(
    multiple({
        docs: docs.toFumadocsSource(),
    }),
    {
        baseUrl: '/',
        plugins: [openapiPlugin()],
    },
);

