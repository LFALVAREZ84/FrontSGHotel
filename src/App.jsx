import Header from './Components/Header/Header';
import UserContext from './Contexts/UserContext/UserContext';

function App() {
  
  return (
    <>
      <UserContext>
          <Header />
          <div className="flex justify-center items-center text-center">Hola Mundo!</div>
      </UserContext>
    </>
  );
}

export default App