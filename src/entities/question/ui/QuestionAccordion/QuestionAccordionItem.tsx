import type { QuestionDto } from '@/shared/api/types';
import { Card } from '@/shared/ui/Card';
import { DropdownArrow } from '@/shared/ui/DropdownArrow';
import { MetricCard } from '@/shared/ui/MetricCard';
import clsx from 'clsx';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuestionAccordionItem.module.css';

type Props = {
  question: QuestionDto;
  defaultOpen?: boolean;
  page: number;
};

export const QuestionAccordionItem = memo(({ question, defaultOpen = false, page }: Props) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className={clsx(styles.item)}>
      <div className={styles.header} onClick={() => setIsOpen((prev) => !prev)}>
        <p className={styles.title}>{question.title}</p>
        <DropdownArrow isActive={isOpen} />
      </div>

      <div className={clsx(styles.bodyWrapper, isOpen && styles.isOpen)}>
        <div className={clsx(styles.bodyContent)}>
          <div className={styles.metrics}>
            <MetricCard title="Рейтинг" score={question.rate} />
            <MetricCard title="Сложность" score={question.complexity} />
          </div>

          <div
            className={styles.answer}
            dangerouslySetInnerHTML={{ __html: question.shortAnswer || question.longAnswer }}
          />

          <Link
            className={styles.link}
            relative="path"
            to={{
              search: `page=${page}`,
              pathname: `${question.id}`,
            }}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </Card>
  );
});
