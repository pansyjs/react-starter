import { createBrowserRouter } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes'
import MainRoutes from './MainRoutes'

const router = createBrowserRouter(
  [
    AuthenticationRoutes,
    MainRoutes,
  ],
  { basename: import.meta.env.BASE_URL }
)

export default router;
