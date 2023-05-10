import React, { useState } from 'react';
import { Tabs, Divider, Space, message } from 'antd';
import {
  AlipayOutlined,
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  WeiboOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormText,
  ProFormCaptcha,
  ProFormCheckbox,
} from '@ant-design/pro-components';
import { OtherLogin } from './components/OtherLogin';

type LoginType = 'phone' | 'account';

const Login: React.FC =  () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');

  return (
    <LoginFormPage
      backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
      logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      title="Github"
      subTitle="全球最大的代码托管平台"
      style={{
        height: '100vh',
      }}
      actions={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Divider plain>
            <span
              style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}
            >
              其他登录方式
            </span>
          </Divider>
          <Space align="center" size={24}>
            <OtherLogin icon={<AlipayOutlined style={{ color: '#1677FF' }} />} />
            <OtherLogin icon={<WechatOutlined style={{ color: '#FF6A10' }} />} />
            <OtherLogin icon={<WeiboOutlined style={{ color: '#333333' }} />} />
          </Space>
        </div>
      }
    >
      <Tabs
        centered
        activeKey={loginType}
        onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        items={[
          { key: 'account', label: '账号密码登录' },
          { key: 'phone', label: '手机号登录' }
        ]}
      />
      {loginType === 'account' && (
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
      )}
      {loginType === 'phone' && (
        <>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined className={'prefixIcon'} />,
            }}
            name="mobile"
            placeholder="手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder="请输入验证码"
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`;
              }
              return '获取验证码';
            }}
            name="captcha"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async () => {
              message.success('获取验证码成功！验证码为：1234');
            }}
          />
        </>
      )}
      <div
        style={{
          marginBlockEnd: 24,
        }}
      >
        <ProFormCheckbox noStyle name="autoLogin">
          自动登录
        </ProFormCheckbox>
        <a
          style={{
            float: 'right',
          }}
        >
          忘记密码
        </a>
      </div>
    </LoginFormPage>
  )
}

export default Login;
