import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useNProgress } from '@rcuse/integrations';
import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import Login from '@/pages/login';
import { BasicLayout } from '@/layouts/BasicLayout';
import { LazyLoad } from './LazyLoad';

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
    element: <BasicLayout />,
    children: [
      ...routerArray,
      {
        path: '/map',
        element: LazyLoad(React.lazy(() => import('@/pages/map'))),
        meta: {
          title: "全景地图",
          key: "map"
        }
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/map" />
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
  const location = useLocation();
  const { start, done } = useNProgress();

  return (
    <TransitionGroup>
      <CSSTransition
        classNames="fade"
        key={location.key}
        onEnter={() => {
          start();
        }}
        onEntered={() => {
          done()
        }}
        appear
        timeout={500}
      >
        {useRoutes(rootRouter)}
      </CSSTransition>
    </TransitionGroup>
  )
};

export default Router;
