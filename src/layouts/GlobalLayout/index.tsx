import React from 'react';
import { App, ConfigProvider } from 'antd';
import { useOutlet } from 'react-router-dom';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <ConfigProvider>
      <App>
        {outlet}
      </App>
    </ConfigProvider>
  )
}

export default GlobalLayout;
