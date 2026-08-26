const ACCESS_FILTERS = [
  {
    title: 'Для всех',
    value: true,
  },
  {
    title: 'Для участников',
    value: false,
  },
];

import { FilterSelect } from '@/shared/ui';
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
      title="Доступ"
    />
  );
});
