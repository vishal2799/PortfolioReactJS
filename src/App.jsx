import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
