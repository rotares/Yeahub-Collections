const ACCESS_FILTERS = [
  {
    title: 'Public',
    value: true,
  },
  {
    title: 'Private',
    value: false,
  },
];

import { collectionsQuerySchema } from '@/entities';
import { type GetPublicCollectionsParams } from '@/shared/api/types';
import { FilterSelect } from '@/shared/ui/FilterSelect';
import { useFilterSelect } from '../model';

export const AccessFilter = () => {
  const { handleToggle, isSelected } = useFilterSelect<GetPublicCollectionsParams, boolean>({
    schema: collectionsQuerySchema,
    key: 'isFree',
  });

  return (
    <FilterSelect
      options={ACCESS_FILTERS}
      onToggle={handleToggle}
      isSelected={isSelected}
      title="Тип"
    />
  );
};
