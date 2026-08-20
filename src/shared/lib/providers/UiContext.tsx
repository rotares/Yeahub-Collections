import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { useClickOutside } from '../hooks';

interface ContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleToggle: () => void;
  ref: React.RefObject<HTMLElement | null>;
}

export const UiContext = createContext<null | ContextType>(null);

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeFilters = useCallback(() => setIsOpen(false), []);

  const ref = useClickOutside(closeFilters);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      handleToggle,
      ref,
    }),
    [isOpen, handleToggle, ref],
  );

  return <UiContext value={value}>{children}</UiContext>;
};
