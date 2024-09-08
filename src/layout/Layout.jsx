import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import FooterComponent from "../components/main/FooterComponent";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
