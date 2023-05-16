import { BrowserRouter } from 'react-router-dom';
import Router from '@/routers';
import 'antd/dist/reset.css';
import './global.less';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
