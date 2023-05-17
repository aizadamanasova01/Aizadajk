import React from "react";
import FilterButtons from "../filter-buttons/FilterButtons";
import Header from "../header/Header";
import Products from "../";
import "./App.css";

const App = () => {
  return (
    <div style={{ padding: "0 50px" }}>
      <Header />
      <div style={{ marginTop: "46px" }}>
        <FilterButtons />
      </div>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
