import { use } from 'react';
import { UiContext } from '../providers';

export const useUiContext = () => {
  const context = use(UiContext);
  if (!context) {
    throw new Error('useUIContext должен использоваться внутри UiProvider');
  }

  return context;
};
