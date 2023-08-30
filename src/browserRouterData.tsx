import NotFound from "./components/pages/notFound";
import MainLayout from "./components/shared/mainLayout";
import {
  WelcomePage,
  RegisterPage,
  LoginPage,
} from "./components/pages/features/preauthorization/superPreauthorizationComponents";
import {
  DashboardPage,
  UserProfilePage,
  TransfersPage,
} from "./components/pages/features/authorizedUser/superAuthorizedPages";

import LandingPage from "./components/pages/landingPage";
import PrivateRoute from "./services/navigation/PrivateRoute";

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
      {
        element: <PrivateRoute outlet={<DashboardPage />} />,
        path: "/dashboard",
      },
      {
        element: <PrivateRoute outlet={<UserProfilePage />} />,
        path: "/myAccount",
      },
      {
        element: <PrivateRoute outlet={<TransfersPage />} />,
        path: "/transfers",
      },
    ],
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
];
