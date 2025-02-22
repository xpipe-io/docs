import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
    input: ['./public/openapi.yaml'], // the OpenAPI schemas
    output: './content/api',
});
