import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import StorePage from "./pages/StorePage";
import SalesPage from "./pages/SalesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Account from "./pages/AccountPage";
import { useUser } from "./context/UserContext";

const App = () => {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route
          exact
          path="/games/:gameId"
          element={
            <MainLayout>
              <GamePage />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/store"
          element={
            <MainLayout>
              <StorePage />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/sales"
          element={
            <MainLayout>
              <SalesPage />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/sales"
          element={
            <MainLayout>
              <SalesPage />
            </MainLayout>
          }
        />
        {user ? (
          <Route
            exact
            path="/account"
            element={
              <MainLayout>
                <Account />
              </MainLayout>
            }
          />
        ) : (
          <Route
            exact
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
        )}
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
