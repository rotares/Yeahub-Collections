import { QuestionAccordionList } from '@/entities';
import { Pagination } from '@/features';
import { Card } from '@/shared/ui/Card';
import { useCollectionQuestions } from '../model';

export const CollectionQuestionsListSection = ({ collectionId }: { collectionId: string }) => {
  const { handleChangePage, isLoadingQuestions, questionsData, totalPages, currentPage } =
    useCollectionQuestions(collectionId);

  if (!questionsData || isLoadingQuestions) {
    return <div>Download</div>;
  }

  return (
    <Card title="Список вопросов">
      <QuestionAccordionList page={currentPage} questions={questionsData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </Card>
  );
};
