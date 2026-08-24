import { DropdownArrow } from '@/shared/ui/DropdownArrow';
import { FormattedAnswer } from '@/shared/ui/FormattedAnswer';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './QuestionLongAnswer.module.css';
type QuestionLongAnswerProps = {
  initialHeight?: number;
  text: string;
};

export const QuestionLongAnswer = ({ initialHeight = 200, text }: QuestionLongAnswerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>(`${initialHeight}px`);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight(`${initialHeight}px`);
    }
  }, [isExpanded, initialHeight]);

  return (
    <div className={styles.container}>
      <div
        ref={contentRef}
        className={clsx(styles.wrapper, isExpanded && styles.expanded)}
        style={{ maxHeight: maxHeight } as React.CSSProperties}
      >
        <FormattedAnswer text={text} />

        {!isExpanded && <div className={styles.fadeOverlay} />}
      </div>

      <button
        type="button"
        className={styles.toggleBtn}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <span>{isExpanded ? 'Свернуть' : 'Развернуть'}</span>
        <DropdownArrow isActive={isExpanded} />
      </button>
    </div>
  );
};
