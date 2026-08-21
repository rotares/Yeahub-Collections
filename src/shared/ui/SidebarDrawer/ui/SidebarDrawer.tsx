import { type DrawerId } from '@/shared/lib/providers';
import { clsx } from 'clsx';
import { useEffect, useRef, type ReactNode } from 'react';
import { useUiContext } from '../../../lib/hooks';
import styles from './SidebarDrawer.module.css';

type Props = {
  id: DrawerId;
  children: ReactNode;
  type?: DrawerId;
};

export const SidebarDrawer = ({ id, children, type = 'burger' }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const { activeId, closeDrawer } = useUiContext();

  const isOpen = activeId === id;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === ref.current) {
      closeDrawer(id);
    }
  };

  return (
    <dialog
      ref={ref}
      onClose={() => closeDrawer(id)}
      onClick={handleBackdropClick}
      className={clsx(styles.dialog, type === 'side' ? styles.side : styles.burger)}
    >
      <div className={styles.content}>{children}</div>
    </dialog>
  );
};
