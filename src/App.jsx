import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import StorePage from "./pages/StorePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
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
          ath="/games/:gameId"
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
