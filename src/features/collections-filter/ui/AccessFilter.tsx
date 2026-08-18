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

import { FilterSelect } from '@/shared/ui/FilterSelect';
import { memo } from 'react';
import { useFilterSelect } from '../model';

export const AccessFilter = memo(() => {
  const { handleToggle, isSelected } = useFilterSelect({
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
});
