import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import Header from "../components/Header";

import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPages from "../pages/SignUpPages";

function index() {
  return (
    <Router>
          <Header/>

      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPages />} />
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default index;
