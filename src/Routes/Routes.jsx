import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login/Login'; // Asegúrate de importar la página adecuada


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
      
      <Route path="/login" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
    </Routes>
  );
};

export default AppRoutes;
