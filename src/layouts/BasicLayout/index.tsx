import React from 'react';
import { Dropdown } from 'antd';
import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
  LogoutOutlined,
} from '@ant-design/icons';
import { useOutlet, useLocation } from 'react-router-dom';
import { ProLayout } from '@ant-design/pro-components';

const routes =  [
  {
    path: '/dashboard',
    name: '欢迎',
    icon: <SmileFilled />,
  },
  {
    path: '/admin',
    name: '管理页',
    icon: <CrownFilled />,
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page1',
        name: '一级页面',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page2',
        name: '二级页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
      {
        path: '/admin/sub-page3',
        name: '三级页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
    ],
  },
  {
    name: '列表页',
    icon: <TabletFilled />,
    path: '/list',
    component: './ListTableList',
    routes: [
      {
        path: '/list/sub-page',
        name: '列表页面',
        icon: <CrownFilled />,
        routes: [
          {
            path: 'sub-sub-page1',
            name: '一一级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: 'sub-sub-page2',
            name: '一二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: 'sub-sub-page3',
            name: '一三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: '/list/sub-page2',
        name: '二级列表页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
      {
        path: '/list/sub-page3',
        name: '三级列表页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
    ],
  },
  {
    path: 'https://ant.design',
    name: 'Ant Design 官网外链',
    icon: <ChromeFilled />,
  },
];

export const BasicLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();

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
      menu={{
        collapsedShowGroupTitle: true,
      }}
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
      onMenuHeaderClick={(e: any) => console.log(e)}
      route={{
        path: '/',
        routes,
      }}
    >
      {outlet}
    </ProLayout>
  )
}
