import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Contact, Home, Services } from './pages';
import ErrorPage from './pages/error-page';

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
