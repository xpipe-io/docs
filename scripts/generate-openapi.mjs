import { generateFiles } from 'fumadocs-openapi';
import {createOpenAPI} from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
    input: ["./public/openapi.json"],
    // This is apparently broken?
    // proxyUrl: "/api/proxy"
});


void generateFiles({
    input: openapi,// the OpenAPI schemas
    output: './content/api',
});
