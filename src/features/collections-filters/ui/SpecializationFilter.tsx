import { useGetSpecializationsQuery } from '@/entities/specialization';
import { specializationTitleMapper } from '@/shared/lib/utils';
import { FilterSelect } from '@/shared/ui/FilterSelect';
import { memo, useMemo } from 'react';
import { useFilterSelect } from '../model';

export const SpecializationFilter = memo(() => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery({ limit: 10 });

  const { handleToggle, isSelected } = useFilterSelect({
    key: 'specializations',
    isMultiple: true,
  });

  const options = useMemo(
    () =>
      specializations.map((spec) => ({
        title: specializationTitleMapper(spec.title),
        value: spec.id,
      })),
    [specializations],
  );

  return (
    <FilterSelect
      maxVisible={5}
      options={options}
      isSelected={isSelected}
      onToggle={handleToggle}
      title="Специализация"
      isLoading={isLoading}
    />
  );
});

SpecializationFilter.displayName = 'SpecializationFilter';
