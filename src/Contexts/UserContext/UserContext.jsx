// UserContext.jsx
import axios from 'axios';
import React, { createContext, useEffect, useState, useContext } from 'react';

export const UsersContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null); // Initialize user state

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null); // Clear user when logging out
    window.location.href = '/Login';
  };

  const login = (userData) => {
    console.log('Usuario ha iniciado sesión:', userData);
    setUser(userData);
  };

  useEffect(() => {
    getUsers();
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, user, setUser, logout, login }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UsersContext);
};

export default UserContextProvider;