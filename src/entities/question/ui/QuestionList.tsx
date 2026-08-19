import type { QuestionDto } from '@/shared/api/types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryParams } from '../../../shared/lib/query-params';
import { QuestionItem } from './QuestionItem';

type QuestionListProps = {
  items: QuestionDto[];
};

export const QuestionList = ({ items }: QuestionListProps) => {
  const navigate = useNavigate();
  const { params } = useQueryParams();

  const handleClick = useCallback(
    (id: number) => {
      navigate(
        {
          pathname: `${id}`,
          search: `page=${params.page}`,
        },
        {
          relative: 'path',
        },
      );
    },
    [navigate, params],
  );

  return (
    <div>
      {items.map((item) => (
        <QuestionItem item={item} key={item.id} onClick={handleClick} />
      ))}
    </div>
  );
};
