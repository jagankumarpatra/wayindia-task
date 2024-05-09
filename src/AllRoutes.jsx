import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AllRoutes;
