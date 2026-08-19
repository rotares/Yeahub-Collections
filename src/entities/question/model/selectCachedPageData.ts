import { questionApi } from '../api';

export const selectCachedPageData = (collectionId: number, page: number) => {
  return questionApi.endpoints.getPublicQuestions.select({
    collection: collectionId,
    page,
  });
};
