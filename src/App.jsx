import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Contact, Home, Portfolio, Services } from './pages';
import ErrorPage from './pages/error-page';
import SinglePortfolio from './pages/SinglePortfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio/:id',
        element: <SinglePortfolio />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
