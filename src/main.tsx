import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '@unocss/reset/tailwind.css'
import 'nprogress/nprogress.css'
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
