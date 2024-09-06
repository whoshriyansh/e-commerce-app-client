import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
