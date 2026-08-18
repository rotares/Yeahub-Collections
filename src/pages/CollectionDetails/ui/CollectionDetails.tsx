import { Navigate, useParams } from 'react-router-dom';
import { useCollectionDetails, useCollectionQuestions } from '../api';
import { Pagination } from '@/shared/ui/Pagintation';

export const CollectionDetails = () => {
  const { id } = useParams();

  //get data
  const { collectionData, isLoadingCollection } = useCollectionDetails(id);
  const { handleChangePage, isLoadingQuestions, questionsData, totalPages, currentPage } =
    useCollectionQuestions(id);

  if (!id) {
    return <Navigate to="/collections" replace={true} />;
  }

  if (!collectionData || isLoadingCollection) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      {collectionData.description}
      {questionsData && (
        <>
          {questionsData.map((q) => {
            return <p>{q.description}</p>;
          })}
        </>
      )}
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );
};
