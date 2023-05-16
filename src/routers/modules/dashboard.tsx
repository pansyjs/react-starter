import React from 'react';
import lazyLoad from '../LazyLoad';
import type { RouteObject } from '../types';

const dashboardRouter: Array<RouteObject> = [
  {
    path: '/dashboard',
    element: lazyLoad(React.lazy(() => import('@/pages/dashboard'))),
    meta: {
      title: "概览",
      key: "dashboard"
    }
  },
];

export default dashboardRouter;
