import { useMediaQuery } from '@/shared/lib';
import { Aside, SidebarDrawer } from '@/shared/ui';
import type { ReactNode } from 'react';

export const FilterBar = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 1280px)');

  return (
    <>
      {isMobile ? (
        <SidebarDrawer id="side" type="side">
          {children}
        </SidebarDrawer>
      ) : (
        <Aside>{children}</Aside>
      )}
    </>
  );
};
