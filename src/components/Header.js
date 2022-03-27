import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Francisco 1o semestre" id="basic-nav-dropdown">
                <LinkContainer to="/media_voltas">
                  <NavDropdown.Item href="/media_voltas"> 
                    Média voltas
                  </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/peso_ideal'>
                <NavDropdown.Item href="#action/3.2">
                  Peso Ideal
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/venda">
                <NavDropdown.Item href="#action/3.3">
                  Venda
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/valores">
                <NavDropdown.Item href="#action/3.3">
                  Valor a vista, 3 e 10
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ftoc">
                <NavDropdown.Item href="#action/3.3">
                Fahrenheit para Celsius
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/dtor">
                <NavDropdown.Item href="#action/3.3">
                Dolar para Real
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/gest">
                <NavDropdown.Item href="#action/3.3">
                Tempo de gestação
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/gasal">
                <NavDropdown.Item href="#action/3.3">
                Consumo Gasolina/Alcool
                </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/precocarro">
                <NavDropdown.Item href="#action/3.3">
                Preço final carro
                </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;