import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number = 400) => {
  const [debounced, setDebounced] = useState<T>(value);
  const [prevValue, setPrevValue] = useState<T>(value);

  if (prevValue !== value) {
    setPrevValue(value);
    if (value === '' || value === undefined || value === null) {
      setDebounced(value);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};
