import { Outlet } from 'react-router-dom';
import classnames from '@pansy/classnames'
import styles from './index.module.less'


export const AuthLayout = () => {
  return (
    <div className={classnames(styles.login, 'relative w-full h-full px-4')}>
      <div className="flex items-center absolute right-4 top-4"></div>

      <div className="container relative h-full py-2 mx-auto sm:px-10">
        <div className="flex h-full">
          <div className="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
            123
          </div>
          <div className="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
            <div
              className="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
              style={{ width: '100%' }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
