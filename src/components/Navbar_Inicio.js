import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap"



export const Navbar_Inicio = () => {

  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >RESTAURANT SIGLO XXI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Carta" >Carta</Nav.Link>
              <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}