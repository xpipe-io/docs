import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/public/logo.svg';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
      title: (
          <>
              {<Image
                  alt="XPipe Logo"
                  src={Logo}
                  className="w-[20px] md:w-[22px] block"
                  aria-label="XPipe"
              />}
              <span className="font-medium text-[15px]">
          XPipe Documentation
        </span>
          </>
      ),
    enabled: false
  },
  githubUrl: 'https://github.com/xpipe-io/docs',
};
