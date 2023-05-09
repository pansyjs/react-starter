import { useRoutes, Navigate } from 'react-router-dom';
import Login from '@/pages/login';

import type { RouteObject } from './types';

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      key: 'login',
      title: '登录页',
    }
  },
];

const Router = () => {
  return useRoutes(rootRouter);
};

export default Router;
