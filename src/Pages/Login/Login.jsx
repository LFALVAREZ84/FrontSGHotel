import React, { useState } from 'react';
import axios from '../../Axios/AxiosConfig';
import './styleLogin.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });

      if (response.data && typeof response.data === 'object') {
        const user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        login(user);
        navigate('/');
      } else {
        console.error('Error al iniciar sesión:', 'Respuesta de formato inesperado');
        setError('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data?.error);
      console.log('Respuesta completa:', error.response);
      console.error('Error completo:', error);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div id="login-container">
      <div id="login-form">
        <h1 id="login-title">Login</h1>

        <div id="input-group-email" className="input-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>
        </div>

        <div id="input-group-password" className="input-group">
          <label htmlFor="password">
            Contraseña:
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div id="btn-login-group">
          <button id="btn-login" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;