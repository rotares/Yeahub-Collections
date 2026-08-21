import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react';

export type DrawerId = 'burger' | 'side';

type DrawerFn<T = void> = (id: DrawerId) => T;

interface ContextType {
  isOpen: DrawerFn<boolean>;
  openDrawer: DrawerFn;
  closeDrawer: DrawerFn;
  toggleDrawer: DrawerFn;
  activeId: DrawerId | null;
}

export const UiContext = createContext<null | ContextType>(null);

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<DrawerId | null>(null);

  const closeDrawer = useCallback(() => {
    setActiveId(null);
  }, []);

  const openDrawer = useCallback((id: DrawerId) => {
    setActiveId(id);
  }, []);

  const toggleDrawer = useCallback((id: DrawerId) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: DrawerId) => activeId === id, [activeId]);

  const value = useMemo(
    () => ({
      activeId,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      isOpen,
    }),
    [activeId, openDrawer, closeDrawer, toggleDrawer, isOpen],
  );

  return <UiContext value={value}>{children}</UiContext>;
};
