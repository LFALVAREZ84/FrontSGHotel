import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { useUser } from '../../Contexts/UserContext/UserContext';
import './styleHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedapps } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { user, logout, setUser } = useUser(); // Utiliza useUser para obtener setUser
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Navbar expand="lg" className="text-center text-white">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>
            {user ? (
              <Nav.Link className="action" href="/">
                <b>¡Bienvenido {user.name}!</b>
              </Nav.Link>
            ) : null}
            {user ? (
              <Nav.Link className="action" href="/Login" onClick={logout}>
                Cerrar Sesión
              </Nav.Link>
            ) : (
              <>
                <Nav.Link className="action" href="/Login">
                  Iniciar Sesión
                </Nav.Link>
                <Nav.Link className="action" href="/Register">
                  Registrarse
                </Nav.Link>
              </>
            )}
            {user ? (user.name === 'Admin' ? (
              <Nav.Link className="action" href="/Admin">
                Panel de Administrador
              </Nav.Link>
            ) : (
              <Nav.Link className="action" href="/Client">
                Reservas
              </Nav.Link>
            )) : null}
            <Nav.Link className="action" href="/">
              <Image src="/public/img/logo_RHR.png" />
            </Nav.Link>
            <Nav.Link className="action" href="/Contact">
              Contacto
            </Nav.Link>
            <Nav.Link className="action" href="/AboutUs">
              Nosotros
            </Nav.Link>
            <Navbar.Brand href="#home">
              <FontAwesomeIcon
                onClick={handleChangeTheme}
                icon={faMedapps}
                fade
                style={{
                  color: '#d7a61d',
                  width: '30',
                  height: '30',
                  marginLeft: '20px',
                  marginTop: '50',
                }}
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;