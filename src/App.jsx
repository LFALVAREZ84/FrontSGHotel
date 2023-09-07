import UserContext from './Contexts/UserContext/UserContext'
import Way from './Routes/Routes'

function App() {
  
  return (
    <>
      <UserContext>  
          <Way />
      </UserContext>
    </>
  );
}

export default App