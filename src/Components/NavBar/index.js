import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

export default function NavbarApp(props) {
  if (props.type === "login") {
    return (
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand>Bienvenido a ConnectIoT</Navbar.Brand>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand>Bienvenido a ConnectIoT</Navbar.Brand>
          <Nav>
            <Form.Select className="me-2">
              <option>Registros</option>
            </Form.Select>
            <Button href="/login" variant="danger">Salir</Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
