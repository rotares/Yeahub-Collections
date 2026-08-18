import { useDebounce } from '@/shared/hooks/useDebounce';
import { useQueryParams } from '@/shared/lib/query-params';
import { useCallback, useEffect, useState, type ChangeEvent } from 'react';
import { type CommonParams } from '@/shared/lib/query-params';
import { type FilterOptions } from './types';

export const useSearchFilter = ({ key }: FilterOptions<CommonParams>) => {
  const { params, setQueryParams } = useQueryParams();

  const urlValue = (params[key] || '') as string;
  const [value, setValue] = useState<string>(urlValue);

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue === urlValue) return;
    setQueryParams({
      [key]: debouncedValue.trim(),
      page: 1,
    });
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
