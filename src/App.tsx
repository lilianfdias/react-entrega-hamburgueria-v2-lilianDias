import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/userContext";
import { GlobalStyle } from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/register";
import { HomePage } from "./pages/home/homePage";
import { FoodProvider } from "./contexts/foodContexts";
import { ProtectedRoutes } from "./components/protectRoute/protectRoute";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <FoodProvider>
          <Routes>
            <Route index path="/" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="home" element={<HomePage />} />
            </Route>
          </Routes>
        </FoodProvider>
      </UserProvider>
    </>
  );
}

export default App;
