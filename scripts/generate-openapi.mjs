import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
    input: ['./content/api/openapi.yaml'], // the OpenAPI schemas
    output: './content/docs',
});
