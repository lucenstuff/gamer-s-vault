import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import GamePage from "../pages/GamePage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import StorePage from "../pages/StorePage";
import SalesPage from "../pages/SalesPage";
import NotFoundPage from "../pages/NotFoundPage";
import AccountPage from "../pages/AccountPage";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  const { user } = useUser();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    {
      path: "/games/:gameId",
      element: (
        <MainLayout>
          <GamePage />
        </MainLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <MainLayout>{user ? <Navigate to="/" /> : <RegisterPage />}</MainLayout>
      ),
    },
    {
      path: "/store",
      element: (
        <MainLayout>
          <StorePage />
        </MainLayout>
      ),
    },
    {
      path: "/sales",
      element: (
        <MainLayout>
          <SalesPage />
        </MainLayout>
      ),
    },
    {
      path: "/account",
      element: (
        <MainLayout>
          <AccountPage />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
};

export default AppRoutes;
