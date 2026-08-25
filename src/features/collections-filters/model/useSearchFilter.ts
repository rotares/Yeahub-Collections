import { useQueryParams, type CommonParams } from '@/shared/lib/hooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useCallback, useEffect, useState, type ChangeEvent } from 'react';
import { type FilterOptions } from './types';

export const useSearchFilter = ({ key }: FilterOptions<CommonParams>) => {
  const { params, setQueryParams } = useQueryParams();

  const urlValue = (params[key] || '') as string;
  const [value, setValue] = useState<string>(urlValue);

  useEffect(() => {
    setValue(urlValue);
  }, [urlValue]);

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue === urlValue) return;

    setQueryParams({
      [key]: debouncedValue.trim() || undefined,
      page: 1,
    });
  }, [debouncedValue, setQueryParams, key]);

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
