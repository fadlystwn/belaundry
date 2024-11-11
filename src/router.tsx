import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Product from './components/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);
