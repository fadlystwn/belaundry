import { createBrowserRouter } from 'react-router-dom';
import HomeDashboard from './HomeDashboard';
import ProductDashboard from './ProductDashboard';
import Home from './Home';
import InvoicePage from './Invoice';
import ProductDetailPage from './ProductDetails';
import LoginPage from './Login';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <HomeDashboard />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <ProductDashboard />,
  },
  {
    path: '/product-details',
    element: <ProductDetailPage />,
  },
  {
    path: '/invoice',
    element: <InvoicePage />,
  },
]);
