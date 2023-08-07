import NotFound from "./components/pages/notFound";
import MainLayout from "./components/shared/mainLayout";
import {
  WelcomePage,
  RegisterPage,
  LoginPage,
} from "./components/pages/features/preauthorization/superPreauthorizationComponents";
import LandingPage from "./components/pages/landingPage";

export const routerData = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
];
