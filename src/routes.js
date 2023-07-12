import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// pages
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import MachinesPage from './pages/MachinesPage';
import DashboardAppPage from './pages/DashboardAppPage';
// services
import { accountService } from './services/account.service';

// ----------------------------------------------------------------------

export default function Router() {
  const isAuthenticated = !!accountService.userValue;

  debugger;

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: isAuthenticated ? <Navigate to="/dashboard/app" /> : null, index: true },
        { path: 'app', element: isAuthenticated ? <DashboardAppPage /> : null },
        { path: 'user', element: isAuthenticated ? <UserPage /> : null },
        { path: 'machines', element: isAuthenticated ? <MachinesPage /> : null },
        { path: 'products', element: isAuthenticated ? <ProductsPage /> : null },
        { path: 'blog', element: isAuthenticated ? <BlogPage /> : null },
      ],
    },
    {
      path: 'login',
      element: !isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
