import { lazy } from 'react'
import { Loadable } from '@/components/Loadable'
import { AuthLayout } from '@/layouts/Auth'
import type { RouteObject } from './types';

const Login = Loadable(lazy(() => import('@/pages/authentication/login')));

const LoginRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Login />
    },
  ],
}

export default LoginRoutes;
