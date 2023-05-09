import { useRoutes, Navigate } from 'react-router-dom';
import Login from '@/pages/login';

import type { RouteObject } from './types';

// * 导入所有router
const metaRouters: Record<string, RouteObject[]> = import.meta.glob(
  './modules/*.tsx',
  {
    eager: true,
    import: 'default',
  }
);

export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(key => {
  routerArray.push(...metaRouters[key]);
});

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
  ...routerArray,
];

const Router = () => {
  return useRoutes(rootRouter);
};

export default Router;
