import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";

import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPages from "../pages/SignUpPages";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={< SignUpPages />} />
        <Route path="/todo" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default index;
