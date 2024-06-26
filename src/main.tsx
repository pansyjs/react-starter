import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
// import 'virtual:unocss-devtools'
import './global.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
