import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Mirror from '../components/Camera/Mirror';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import PartnersPage from '../components/PartnersPage';
import ProjectsPage from '../components/ProjectsPage';
import SolutionsPage from '../components/SolutionsPage';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "partners",
        element: <PartnersPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "solutions",
        element: <SolutionsPage />
      },
      {
        path: "mirror",
        element: <Mirror />

      }
    ],
  },
]);
