import React from 'react';
import UserContextProvider from './Contexts/UserContext/UserContext';  // Importa UserContextProvider
import Header from './Components/Header/Header';
import RoutesContainer from './Routes/Routes';

function App() {
  return (
    <UserContextProvider>  {/* Usa UserContextProvider en lugar de UserContext */}
      <Header />
      <RoutesContainer />
    </UserContextProvider>
  );
}

export default App;