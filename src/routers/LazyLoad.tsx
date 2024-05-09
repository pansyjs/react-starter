import React, { Suspense } from 'react';
import { Spin } from '@arco-design/web-react'

export const LazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  )
}

export default LazyLoad;
