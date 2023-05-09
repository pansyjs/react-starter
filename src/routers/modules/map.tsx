import React from 'react';
import lazyLoad from '../LazyLoad';
import type { RouteObject } from '../types';

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
  {
    path: '/map',
    element: lazyLoad(React.lazy(() => import('@/pages/map'))),
    meta: {
      title: "全景地图",
      key: "map"
    }
  },
];

export default dashboardRouter;
