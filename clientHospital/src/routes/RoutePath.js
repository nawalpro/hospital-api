import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/HomePage";
import LogInPage from "../pages/LoginPage";

function RoutesPath() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesPath;
