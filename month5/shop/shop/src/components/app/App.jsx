import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FilterButtons from "../filter-buttons/FilterButtons";
import Header from "../header/Header";
import Cart from "../pages/cart/Cart";
import Products from "../pages/products/Products";
import "./App.css";

const App = () => {
  const [filterType, setFilterType] = useState("all");

  return (
    <div style={{ padding: "0 50px" }}>
      <Header />
      <div style={{ marginTop: "45px" }}>
        <FilterButtons onSetFilterType={setFilterType} />
      </div>
      <Routes>
        <Route
          path="/products"
          element={<Products filterType={filterType} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <>
              <h3>404 PAGE NOT FOUND</h3>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
