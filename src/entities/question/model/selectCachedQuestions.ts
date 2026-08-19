import { type RootState } from '@/app/store';
import { questionApi } from '../api';

export const selectCachedQuestions = (collectionId: number, page: number) => {
  const getQueryState = questionApi.endpoints.getPublicQuestions.select({
    collection: collectionId,
    page,
  });

  return (state: RootState) => getQueryState(state).data?.data ?? [];
};
