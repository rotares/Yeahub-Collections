import { router } from '@/app/routes';
import { RouterProvider } from 'react-router-dom';

export const Router = () => {
  return <RouterProvider router={router} />;
};
