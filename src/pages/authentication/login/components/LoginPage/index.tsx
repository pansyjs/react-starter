import React from 'react'
import classnames from '@pansy/classnames'
import styles from './index.module.less'

interface LoginPageProps {
  children?: React.ReactNode
}

export const LoginPage = (props: LoginPageProps) => {
  return (
    <div className={classnames(styles.login, 'relative w-full h-full px-4')}>
      {props.children}
    </div>
  )
}
