import { useQueryParams, type CommonParams } from '@/shared/lib';
import { useCallback, useMemo } from 'react';
import { type FilterOptions } from './types';

export const useFilterSelect = ({ key, isMultiple = false }: FilterOptions<CommonParams>) => {
  const { params, setQueryParams } = useQueryParams();

  const rawValue = params[key];

  const currentValue = useMemo(() => {
    if (isMultiple) {
      return Array.isArray(rawValue)
        ? rawValue.map(Number)
        : rawValue !== undefined && rawValue !== null
          ? [Number(rawValue)]
          : [];
    }
    return rawValue ?? undefined;
  }, [rawValue, isMultiple]);

  const handleToggle = useCallback(
    (value: CommonParams[typeof key]) => {
      if (isMultiple) {
        const currentArray = Array.isArray(currentValue) ? currentValue : [];
        const exists = currentArray.includes(value as number);
        const updated = exists ? currentArray.filter((v) => v !== value) : [...currentArray, value];
        setQueryParams({
          [key]: updated,
          page: 1,
        });
      } else {
        const updated = currentValue === value ? undefined : value;
        setQueryParams({
          [key]: updated,
          page: 1,
        });
      }
    },
    [isMultiple, currentValue, key, setQueryParams],
  );

  const isSelected = useCallback(
    (value: CommonParams[typeof key]): boolean => {
      if (isMultiple) {
        return Array.isArray(currentValue) ? currentValue.includes(value as number) : false;
      }
      return currentValue === value;
    },
    [isMultiple, currentValue],
  );

  return {
    handleToggle,
    isSelected,
    currentValue,
  };
};
