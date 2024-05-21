import { lazy } from 'react'
import { Loadable } from '@/components/Loadable'
import { MainLayout } from '@/layouts/Main'
import type { RouteObject } from './types';

const Dashboard = Loadable(lazy(() => import('@/pages/dashboard')));

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
  ],
}

export default MainRoutes;
