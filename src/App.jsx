import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ShopPage from "./pages/shop/ShopPage";
import { ProductProvider } from "./context/ProductContext";
import ProductDetailPage from "./pages/shop/ProductDetailPage";

import Dashboard from "./pages/Dashboard";
import { ProtectedRoutes } from "./hooks/routes/PrivateRoute";

const App = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/all-products" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </ProductProvider>
  );
};

export default App;
