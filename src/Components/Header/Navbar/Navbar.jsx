import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import { useContext } from 'react';




const Navbar = () => {

  const {outlogin} = useContext(UserContext)

  const user = JSON.parse(localStorage.getItem("user"))

  return (

    <Navbar expand="lg" className='text-center text-white'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>           
              { user ? 
              <Nav.Link className='action' href="/"><b>¡Bienvenido </b>
              <Col>
              <b>{user.name}!</b>
              </Col>
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
                <Col>Administrador</Col> </Nav.Link>):(
              <Nav.Link className='action' href="/Client">Reservas</Nav.Link>
                )) : (
                  <Nav.Link className='action' href="/"></Nav.Link>
                )}
              </>
              <Container>
              <Row>
              <Col>
              <Image src="src\assets\img\Logo Hotel.jpg"  rounded />
              </Col>
              </Row>
              </Container>
            <Nav.Link className='action' href="/">Home</Nav.Link>
            <Nav.Link className='action' href="/Contact">Contacto</Nav.Link>
            <Nav.Link className='action' href="/AboutUs">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;