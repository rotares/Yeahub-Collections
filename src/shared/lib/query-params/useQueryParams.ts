import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { type QuerySchema } from './types';
import { parseValue, serializeValue } from './utils';

export const useQueryParams = <T extends object>(schema: QuerySchema<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.keys(schema).reduce((acc, key) => {
    const paramKey = key as keyof T;
    const { type, defaultValue } = schema[paramKey];
    const rawValue = searchParams.get(String(paramKey));

    acc[paramKey] = parseValue(rawValue, type, defaultValue) as T[keyof T];
    return acc;
  }, {} as T);

  const setQueryParams = useCallback(
    (newParams: Partial<T>) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);

          Object.entries(newParams).forEach(([key, value]) => {
            const paramKey = key as keyof T;
            const schemaConfig = schema[paramKey];

            if (!schemaConfig) return;

            const serialized = serializeValue(value, schemaConfig.type);

            if (serialized === null) {
              next.delete(key);
            } else {
              next.set(key, serialized);
            }
          });

          return next;
        },
        { replace: true },
      );
    },
    [schema, setSearchParams],
  );

  return {
    params,
    setQueryParams,
  };
};
