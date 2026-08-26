import { Loader } from '@/shared/ui';
import { Suspense, lazy, type ComponentType, type FC } from 'react';

export const lazyWithLoader = (importFn: () => Promise<{ default: ComponentType }>): FC => {
  const LazyComponent = lazy(importFn);

  return () => (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  );
};
