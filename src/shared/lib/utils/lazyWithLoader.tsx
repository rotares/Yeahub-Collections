import { type ComponentType, Suspense, lazy, type FC } from 'react';
import { Loader } from '@/shared/ui/Loader';

export const lazyWithLoader = (importFn: () => Promise<{ default: ComponentType }>): FC => {
  const LazyComponent = lazy(importFn);

  return () => (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  );
};
