import { collectionsQuerySchema } from '@/entities/collection';
import { useGetSpecializationsQuery } from '@/entities/specialization';
import { type GetPublicCollectionsParams } from '@/shared/api/types';
import { FilterSelect } from '@/shared/ui/FilterSelect';
import { useFilterSelect } from '../model';

export const SpecializationFilter = () => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery({});

  const { handleToggle, isSelected } = useFilterSelect<GetPublicCollectionsParams, number>({
    schema: collectionsQuerySchema,
    key: 'specializations',
    isMultiple: true,
  });

  const options = specializations.map((spec) => ({
    title: spec.title,
    value: spec.id,
  }));

  return (
    <FilterSelect
      options={options}
      isSelected={isSelected}
      onToggle={handleToggle}
      title="Специализация"
      isLoading={isLoading}
    />
  );
};
