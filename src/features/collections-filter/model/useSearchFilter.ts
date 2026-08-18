import { useDebounce } from '@/shared/hooks/useDebounce';
import { useQueryParams, type QuerySchema } from '@/shared/lib/query-params';
import { useCallback, useEffect, useState, type ChangeEvent } from 'react';

interface SearchFilterProps<TParams> {
  key: keyof TParams;
  schema: QuerySchema<TParams>;
}

export const useSearchFilter = <TParams extends object>({
  key,
  schema,
}: SearchFilterProps<TParams>) => {
  const { params, setQueryParams } = useQueryParams<TParams>(schema);

  const urlValue = (params[key] || '') as string;
  const [value, setValue] = useState<string>(urlValue);

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue === urlValue) return;
    setQueryParams({
      [key]: debouncedValue.trim(),
      page: 1,
    } as unknown as Partial<TParams>);
  }, [debouncedValue, urlValue, setQueryParams, key]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onClear = useCallback(() => {
    setValue('');
  }, []);

  return {
    value,
    onChange,
    onClear,
  };
};
