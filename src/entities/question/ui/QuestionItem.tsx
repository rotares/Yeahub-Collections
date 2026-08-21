import { type QuestionDto } from '@/shared/api/types';
import { Card } from '@/shared/ui/Card';
import { memo } from 'react';

interface QuestionItemProps {
  item: QuestionDto;
  onClick?: (id: number) => void;
}

//todo
export const QuestionItem = memo(({ item, onClick }: QuestionItemProps) => {
  return (
    <Card>
      <article onClick={() => onClick?.(item.id)}>{item.title}</article>
    </Card>
  );
});

QuestionItem.displayName = 'QuestionItem';
