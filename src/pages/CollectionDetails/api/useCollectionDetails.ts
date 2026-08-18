import { useGetCollectionByIdQuery } from '@/entities';
import { isValidIdCheck } from '../utils';

export const useCollectionDetails = (collectionId: string | undefined) => {
  const { isValid, id } = isValidIdCheck(collectionId);

  const { data, isLoading } = useGetCollectionByIdQuery(id, {
    skip: !isValid,
  });

  return {
    collectionData: data,
    isLoadingCollection: isLoading,
  };
};
