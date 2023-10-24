import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UsersContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [users, setUsuarios] = useState([]);

  //const getUsuarios = async () => {
    //try {
     // const response = await axios.get("http://localhost:8001/api/users");
     // console.log(response, "response context");
     // setUsuarios(response.data);
   // } catch (error) {
   //   console.log(error);
  //  }
 // }

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  //useEffect(() => {
   // getUsuarios();
  //}, []);

  return (
    <UsersContext.Provider value={{ users, setUsuarios, cerrarSesion }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UserContext;