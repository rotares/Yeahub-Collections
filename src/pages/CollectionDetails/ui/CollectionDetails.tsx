import { QuestionList } from '@/entities';
import { Pagination } from '@/shared/ui/Pagintation';
import { Navigate, useParams } from 'react-router-dom';
import { useCollectionDetails, useCollectionQuestions } from '../api';

export const CollectionDetails = () => {
  const { collectionId } = useParams();

  //get data
  const { collectionData, isLoadingCollection } = useCollectionDetails(collectionId);
  const { handleChangePage, isLoadingQuestions, questionsData, totalPages, currentPage } =
    useCollectionQuestions(collectionId);

  if (!collectionId) {
    return <Navigate to="/collections" replace={true} />;
  }

  if (!collectionData || isLoadingCollection) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      {collectionData.description}
      {questionsData && <QuestionList items={questionsData} />}
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );
};
