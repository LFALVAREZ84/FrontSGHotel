import React, { useState } from 'react';
import axios from '../../Axios/AxiosConfig';
import './styleRegister.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Utiliza useNavigate desde react-router-dom
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/users/register', {
        name,
        surname,
        email,
        password, // Corrige la variable que se envía al servidor
      });

      console.log('Respuesta exitosa:', response.data);

      // Redirige al usuario al inicio después de un registro exitoso
      navigate('/');
    } catch (error) {
      console.error('Error al registrarse:', error.response?.data?.error);
      // Asegúrate de imprimir el mensaje de error específico desde el servidor
      setError('Error interno del servidor al registrarse');
    }
  };

  return (
    <div id="register-container">
      <div id="register-form">
        <h1 id="register-title">Registro</h1>

        <div id="input-group-name" className="input-group">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div id="input-group-surname" className="input-group">
          <label>Apellido:</label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>

        <div id="input-group-email" className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div id="input-group-password" className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div id="btn-register-group">
          <button id="btn-register" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;