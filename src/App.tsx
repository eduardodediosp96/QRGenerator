import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// @Components
import Layout from './components/Layout/Layout';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Home from '@components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
