import React from 'react'

interface LoginPageProps {
  children?: React.ReactNode
}

export const LoginPage = (props: LoginPageProps) => {
  return (
    <div className="relative w-full h-full px-4">
      登录页面
      {props.children}
      <div className="i-carbon:accessibility-alt" />
    </div>
  )
}
