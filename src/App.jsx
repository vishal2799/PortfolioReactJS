import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Contact, Home } from './pages';
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
