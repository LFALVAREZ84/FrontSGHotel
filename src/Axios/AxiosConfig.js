// src/Axios/AxiosConfig.jsx
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8001',  // Reemplaza con la URL de tu servidor backend y el puerto
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar otros encabezados comunes aquí según sea necesario
  },
});

export default instance;