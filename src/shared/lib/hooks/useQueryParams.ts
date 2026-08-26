import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const titleOrDescriptionSearch = searchParams.get('titleOrDescriptionSearch') || undefined;
  const isFree = searchParams.has('isFree') ? searchParams.get('isFree') === 'true' : undefined;
  const rawSpec = searchParams.get('specializations');

  const specializations = useMemo(() => {
    if (!rawSpec) return [];
    return rawSpec
      .split(',')
      .map(Number)
      .filter((val) => !isNaN(val));
  }, [rawSpec]);

  const resetQueryParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const setQueryParams = useCallback(
    (
      newParams: Partial<{
        page: number;
        limit: number;
        titleOrDescriptionSearch: string;
        isFree: boolean;
        specializations: number[];
      }>,
    ) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);

          Object.entries(newParams).forEach(([key, value]) => {
            if (
              value === undefined ||
              value === null ||
              value === '' ||
              (Array.isArray(value) && value.length === 0)
            ) {
              next.delete(key);
            } else if (Array.isArray(value)) {
              next.set(key, value.join(','));
            } else {
              next.set(key, String(value));
            }
          });

          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const params = useMemo(
    () => ({
      page,
      limit,
      titleOrDescriptionSearch,
      isFree,
      specializations,
    }),
    [limit, page, titleOrDescriptionSearch, isFree, specializations],
  );

  return {
    params,
    setQueryParams,
    resetQueryParams,
  };
};
