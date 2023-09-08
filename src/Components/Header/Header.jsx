import { Container, Nav, Navbar, Image, NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import { UsersContext } from '../../Contexts/UserContext/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedapps} from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react';

const Header = () => {

  const {logout} = useContext(UsersContext)

  const user = JSON.parse(localStorage.getItem("user"))

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) 
    {
      return "dark";
    } 
    return "light";
  });

  useEffect(() => {
		if (theme == "dark") {    
			document.querySelector('body').classList.add('dark');
} else {
	document.querySelector('body').classList.remove('dark');
}
}, [theme]);

const handleChangeTheme = () => {
	setTheme(prevTheme => prevTheme == "light" ? "dark" : "light");
};

  return (

    <Navbar expand="lg" className='text-center text-white'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>           
              { user ? 
              <Nav.Link className='action' href="/"><b>¡Bienvenido </b>
              
              <b>{user.name}!</b>
              
              </Nav.Link> : null} 
              { user ? (
              <Nav.Link className='action' href="/Login" onClick={logout}>Cerrar Sesion</Nav.Link>
              ) : (
              <> 
              <Nav.Link className='action' href="/Login">Iniciar Sesion</Nav.Link>
              <Nav.Link className='action' href="/SignUp">Registrarse</Nav.Link>
              </>
              )}
              <>
              { user ? ( user.name === 'Admin' ? (
              <Nav.Link className='action' href="/Admin">Panel de
                Administrador </Nav.Link>):(
              <Nav.Link className='action' href="/Client">Reservas</Nav.Link>
                )) : (
                  <label></label>
                )}
              </>
              <NavLink className='action' href="/">
              <Image src="./../../../public/img/logo_RHR.png" />
              </NavLink>
            <Nav.Link className='action' href="/Contact">Contacto</Nav.Link>
            <Nav.Link className='action' href="/AboutUs">Nosotros</Nav.Link>
            <Navbar.Brand 
                href="#home"><FontAwesomeIcon onClick={handleChangeTheme} icon={faMedapps} fade style={{color: "#d7a61d", width:"30",
              height:"30", marginLeft:"20px", marginTop:"50"}} /></Navbar.Brand>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;