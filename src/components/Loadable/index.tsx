import React, { Suspense } from 'react'
import { Loader } from '../Loader'

export const Loadable = (Component: React.LazyExoticComponent<any>) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
}
