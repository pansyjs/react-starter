import { RouterProvider } from 'react-router-dom';
import router from '@/routers';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';

export const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
