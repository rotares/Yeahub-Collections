import { ErrorPage } from '@/pages';
import { ROUTE_CONFIG } from '@/shared/config';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../layout';
import { lazyWithLoader } from '@/shared/lib/utils';

const CollectionDetailsPage = lazyWithLoader(() => import('@/pages/CollectionDetailsPage'));
const CollectionsPage = lazyWithLoader(() => import('@/pages/CollectionsPage'));
const QuestionDetailsPage = lazyWithLoader(() => import('@/pages/QuestionDetailsPage'));

export const router = createBrowserRouter([
  {
    path: ROUTE_CONFIG.BASE,
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTE_CONFIG.COLLECTIONS} replace={true} />,
          },
          {
            path: ROUTE_CONFIG.COLLECTIONS,
            children: [
              {
                index: true,
                element: <CollectionsPage />,
              },
              {
                path: ':collectionId',
                element: <CollectionDetailsPage />,
              },
              {
                path: ':collectionId/:questionId',
                element: <QuestionDetailsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
