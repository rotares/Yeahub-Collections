import { type GetPublicCollectionsParams } from '@/shared/api/types';
import { type QuerySchema } from '@/shared/lib/hooks/query-params-types';

export const collectionsQuerySchema: QuerySchema<GetPublicCollectionsParams> = {
  page: { type: 'number', defaultValue: 1 },
  limit: { type: 'number', defaultValue: 10 },
  titleOrDescriptionSearch: { type: 'string', defaultValue: undefined },
  isFree: { type: 'boolean', defaultValue: undefined },
  specializations: { type: 'numberArray', defaultValue: [] },
};
