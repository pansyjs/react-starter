import { HashRouter } from 'react-router-dom';
import Router from '@/routers';
import 'antd/dist/reset.css';
import './global.less';

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}

export default App
