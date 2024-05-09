import { useOutlet } from 'react-router-dom';

export const BasicLayout = () => {
  const outlet = useOutlet();

  return (
    <>
      {outlet}
    </>
  )
}
