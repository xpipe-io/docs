import { openapi } from '@/lib/source';
import { createAPIPage } from 'fumadocs-openapi/ui';

export const APIPage = createAPIPage(openapi, {
    shikiOptions: {
        themes: {
            dark: 'vesper',
            light: 'vitesse-light',
        },
    },
});
