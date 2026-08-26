import { useQueryParams, type CommonParams } from '@/shared/lib';
import { useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react';
import { type FilterOptions } from './types';

export const useSearchFilter = ({ key }: FilterOptions<CommonParams>) => {
  const { params, setQueryParams } = useQueryParams();

  const urlValue = (params[key] || '') as string;
  const [value, setValue] = useState<string>(urlValue);

  const prevUrlValueRef = useRef(urlValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const setQueryParamsRef = useRef(setQueryParams);

  const updateUrlDebounced = useCallback(
    (newValue: string) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setQueryParamsRef.current({
          [key]: newValue.trim() || undefined,
          page: 1,
        });
      }, 400);
    },
    [key],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setValue(val);
      updateUrlDebounced(val);
    },
    [updateUrlDebounced],
  );

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    setQueryParamsRef.current = setQueryParams;
  }, [setQueryParams]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  useEffect(() => {
    const isUrlCleared = Boolean(prevUrlValueRef.current) && !urlValue;
    if (isUrlCleared) {
      clearTimer();
      setValue('');
    }
    prevUrlValueRef.current = urlValue;
  }, [urlValue, clearTimer]);

  return {
    value,
    onChange,
  };
};
