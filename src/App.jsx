import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SalesPage from "./pages/SalesPage";

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
          path="/game"
          element={
            <MainLayout>
              <GamePage />
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
      </Routes>
    </Router>
  );
};

export default App;
