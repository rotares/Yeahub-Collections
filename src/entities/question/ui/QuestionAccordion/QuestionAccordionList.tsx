import type { QuestionDto } from '@/shared/api/types';
import { QuestionAccordionItem } from './QuestionAccordionItem';

export const QuestionAccordionList = ({
  questions,
  page,
}: {
  questions: QuestionDto[];
  page: number;
}) => {
  return questions.map((q) => <QuestionAccordionItem page={page} question={q} key={q.id} />);
};
