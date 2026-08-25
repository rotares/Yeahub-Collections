import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number = 400): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const isEmpty = value === '' || value === undefined || value === null;

  if (isEmpty && debouncedValue !== value) {
    setDebouncedValue(value);
  }

  useEffect(() => {
    if (isEmpty) return;

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, isEmpty]);

  return isEmpty ? value : debouncedValue;
};
