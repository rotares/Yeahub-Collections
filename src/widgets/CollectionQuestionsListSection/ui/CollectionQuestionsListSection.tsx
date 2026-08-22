import { QuestionList } from '@/entities';
import { Pagination } from '@/features';
import { useCollectionQuestions } from '../model';

export const CollectionQuestionsListSection = ({ collectionId }: { collectionId: string }) => {
  const { handleChangePage, isLoadingQuestions, questionsData, totalPages, currentPage } =
    useCollectionQuestions(collectionId);

  if (!questionsData || isLoadingQuestions) {
    return <div>Download</div>;
  }

  return (
    <div>
      <QuestionList items={questionsData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );
};
