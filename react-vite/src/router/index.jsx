import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Mirror from '../components/Camera/Mirror';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import HowItWorksPage from '../components/HowItWorksPage';
import ContactPage from '../components/ContactPage';
import ManageAccountPage from '../components/ManageAccountPage.jsx';
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
        path: "how-it-works",
        element: <HowItWorksPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "mirror",
        element: <Mirror />
      },
      {
        path: "manage-account",
        element: <ManageAccountPage/>
      }
    ],
  },
]);
