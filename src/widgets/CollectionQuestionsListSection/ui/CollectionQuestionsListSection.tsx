import { QuestionAccordionList } from '@/entities';
import { Pagination } from '@/features';
import { useCollectionQuestions } from '../model';
import styles from './CollectionQuestionsListSection.module.css';
export const CollectionQuestionsListSection = ({ collectionId }: { collectionId: string }) => {
  const { handleChangePage, isLoadingQuestions, questionsData, totalPages, currentPage } =
    useCollectionQuestions(collectionId);

  if (!questionsData || isLoadingQuestions) {
    return <div>Download</div>;
  }

  return (
    <div className={styles.content}>
      <QuestionAccordionList page={currentPage} questions={questionsData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );
};
