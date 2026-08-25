import { CollectionDetailsPage, CollectionsPage, QuestionDetailsPage } from '@/pages';
import { ROUTE_CONFIG } from '@/shared/config';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: ROUTE_CONFIG.BASE,
    element: <Layout />,
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
]);
