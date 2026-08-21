import { useGetSpecializationsQuery } from '@/entities/specialization';
import { FilterSelect } from '@/shared/ui/FilterSelect';
import { memo, useMemo } from 'react';
import { useFilterSelect } from '../model';
import { specializationTitleMapper } from '../utils';

export const SpecializationFilter = memo(() => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery({});

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
      options={options}
      isSelected={isSelected}
      onToggle={handleToggle}
      title="Специализация"
      isLoading={isLoading}
    />
  );
});

SpecializationFilter.displayName = 'SpecializationFilter';
