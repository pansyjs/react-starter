import React from 'react';

import { useOutlet } from 'react-router-dom';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <>
      {outlet}
    </>
  )
}

export default GlobalLayout;
