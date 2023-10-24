import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../Pages/Register/Register'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} /> {/* Ruta para la página de registro */}
      </Routes>
      
    </Router>
  );
};

export default AppRoutes;