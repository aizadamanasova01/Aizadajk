import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          // height: "400px",
          background: "lightblue",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
