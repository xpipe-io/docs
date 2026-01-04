import { openapi } from '@/lib/source';

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy({
    allowedOrigins: ['http://localhost:21721', 'http://localhost:21722'],
});