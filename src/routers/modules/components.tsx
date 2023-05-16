import React from 'react';
import lazyLoad from '../LazyLoad';
import type { RouteObject } from '../types';

const dashboardRouter: Array<RouteObject> = [
  {
    path: '/components',
    meta: {
      title: "组件",
    },
    children: [
      {
        path: '/components/virtualized',
        element: lazyLoad(React.lazy(() => import('@/pages/components/virtualized'))),
        meta: {
          title: 'virtualized',
        },
      }
    ],
  },
];

export default dashboardRouter;
