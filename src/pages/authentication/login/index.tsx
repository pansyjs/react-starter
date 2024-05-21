import { Form, Input, Button } from '@arco-design/web-react'

const Login = () => {
  return (
    <>
      <h2 className="mb-8 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
        登录
      </h2>
      <Form size="large" className="enter-x">
        <Form.Item field="username">
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item field="password">
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item field="password">
          <Button long type="primary">登录</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login;
