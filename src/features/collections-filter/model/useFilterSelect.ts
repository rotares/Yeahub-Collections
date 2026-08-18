import { type QuerySchema } from '@/shared/lib/query-params';
import { useQueryParams } from '@/shared/lib/query-params/useQueryParams';
import { useCallback, useMemo } from 'react';

type FilterSelectOptions<TParams> = {
  schema: QuerySchema<TParams>;
  key: keyof TParams;
  isMultiple?: boolean;
};

export const useFilterSelect = <TParams extends object, K = unknown>({
  schema,
  key,
  isMultiple = false,
}: FilterSelectOptions<TParams>) => {
  const { params, setQueryParams } = useQueryParams<TParams>(schema);

  const rawValue = params[key];

  const currentValue = useMemo<K[] | K | undefined>(() => {
    if (isMultiple) {
      return Array.isArray(rawValue)
        ? (rawValue.map(Number) as K[])
        : rawValue !== undefined && rawValue !== null
          ? ([Number(rawValue)] as K[])
          : [];
    }
    return (rawValue as K) ?? undefined;
  }, [rawValue, isMultiple]);

  const handleToggle = useCallback(
    (value: K) => {
      if (isMultiple) {
        const currentArray = Array.isArray(currentValue) ? currentValue : [];
        const exists = currentArray.includes(value);
        const updated = exists ? currentArray.filter((v) => v !== value) : [...currentArray, value];
        setQueryParams({
          [key]: updated,
          page: 1,
        } as unknown as Partial<TParams>);
      } else {
        const updated = currentValue === value ? undefined : value;
        setQueryParams({
          [key]: updated,
          page: 1,
        } as unknown as Partial<TParams>);
      }
    },
    [isMultiple, currentValue, key, setQueryParams],
  );

  const isSelected = useCallback(
    (value: K): boolean => {
      if (isMultiple) {
        return Array.isArray(currentValue) ? currentValue.includes(value) : false;
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
