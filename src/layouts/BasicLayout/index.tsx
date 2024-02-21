import React from 'react';
import { Dropdown } from 'antd';
import {
  SmileFilled,
  LogoutOutlined,
} from '@ant-design/icons';
import { useOutlet, useLocation, useNavigate } from 'react-router-dom';
import { ProLayout } from '@ant-design/pro-components';

const routes =  [
  {
    path: '/dashboard',
    name: '欢迎',
    icon: <SmileFilled />,
  },
  {
    path: '/map',
    name: '地图',
    icon: <SmileFilled />,
  },
];

export const BasicLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ProLayout
      path="/"
      title="Vite React Starter"
      logo="/vite.svg"
      bgLayoutImgList={[
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          left: 85,
          bottom: 100,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          bottom: -68,
          right: -45,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
          bottom: 0,
          left: 0,
          width: '331px',
        },
      ]}
      location={location}
      siderMenuType="group"
      fixSiderbar={true}
      layout="mix"
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
        render: (_: any, dom: React.ReactNode) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      menuProps={{
        onClick: (info: any) => {
          navigate(info.key);
        }
      }}
      route={{
        path: '/',
        routes,
      }}
    >
      {outlet}
    </ProLayout>
  )
}
