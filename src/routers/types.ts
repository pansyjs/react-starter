import type { NonIndexRouteObject } from 'react-router-dom';

export interface Meta {
  /* 页面唯一标识 */
  key?: string;
  /* 页面标题 */
  title: string;
  /* 权限吗 */
  authority?: string;
}

export interface RouteObject extends Omit<NonIndexRouteObject, 'children'> {
  meta?: Meta;
  children?: RouteObject[];
}
