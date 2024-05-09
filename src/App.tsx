import { BrowserRouter } from 'react-router-dom';
import Router from '@/routers';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';

export const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}
