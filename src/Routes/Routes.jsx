// src/Routes/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// Importa otros componentes según sea necesario

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

const RoutesContainer = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RoutesContainer;