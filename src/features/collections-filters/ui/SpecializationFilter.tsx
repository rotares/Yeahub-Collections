import { useGetSpecializationsQuery } from '@/entities/specialization';
import { FilterSelect } from '@/shared/ui/FilterSelect';
import { memo } from 'react';
import { useFilterSelect } from '../model';

export const SpecializationFilter = memo(() => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery({});

  const { handleToggle, isSelected } = useFilterSelect({
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
});
