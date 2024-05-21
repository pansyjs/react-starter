import { Form, Input, Button } from '@arco-design/web-react'
import { FormTitle } from '../components/FormTitle'

const Login = () => {
  return (
    <>
      <FormTitle title="登录" />
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
