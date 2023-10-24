import UserContext from './Contexts/UserContext/UserContext'
import AppRoutes from './Routes/Routes'

function App() {
  
  return (
    <>
      <UserContext>  
          <AppRoutes />
      </UserContext>
    </>
  );
}

export default App