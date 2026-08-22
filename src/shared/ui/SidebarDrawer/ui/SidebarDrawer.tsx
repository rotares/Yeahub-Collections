import { useUiContext } from '@/shared/lib/hooks';
import { type DrawerId } from '@/shared/lib/providers';
import { clsx } from 'clsx';
import { useEffect, useRef, type ReactNode } from 'react';
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
      <div className={styles.mainWrapper}>
        <div onClick={() => closeDrawer(id)} className={styles.closeButton}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35891 7.47479C8.11483 7.23072 7.7191 7.23072 7.47502 7.47479C7.23095 7.71887 7.23095 8.1146 7.47502 8.35868L9.11643 10.0001L7.47504 11.6415C7.23096 11.8855 7.23096 12.2813 7.47504 12.5253C7.71912 12.7694 8.11485 12.7694 8.35893 12.5253L10.0003 10.884L11.6417 12.5253C11.8858 12.7694 12.2815 12.7694 12.5256 12.5253C12.7696 12.2812 12.7696 11.8855 12.5256 11.6414L10.8842 10.0001L12.5256 8.35869C12.7697 8.11462 12.7697 7.71889 12.5256 7.47481C12.2815 7.23073 11.8858 7.23073 11.6417 7.47481L10.0003 9.11619L8.35891 7.47479Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0003 1.04175C5.05277 1.04175 1.04199 5.05253 1.04199 10.0001C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10.0001C18.9587 5.05253 14.9479 1.04175 10.0003 1.04175ZM2.29199 10.0001C2.29199 5.74289 5.74313 2.29175 10.0003 2.29175C14.2575 2.29175 17.7087 5.74289 17.7087 10.0001C17.7087 14.2573 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2573 2.29199 10.0001Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>
  );
};
