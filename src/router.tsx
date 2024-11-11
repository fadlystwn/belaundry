import { createBrowserRouter } from 'react-router-dom';
import HomeDashboard from './HomeDashboard';
import ProductDashboard from './ProductDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeDashboard />,
  },
  {
    path: '/product',
    element: <ProductDashboard />,
  },
]);
