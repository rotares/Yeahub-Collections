import { useMediaQuery } from '@/shared/lib/hooks';
import { Aside } from '@/shared/ui/Aside';
import { SidebarDrawer } from '@/shared/ui/SidebarDrawer';
import type { ReactNode } from 'react';

export const FilterBar = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

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
