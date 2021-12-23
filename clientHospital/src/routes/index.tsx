import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";

import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default index;
