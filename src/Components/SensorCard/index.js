import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

export default function SensorCard(props) {
  const [showDevice, setShowDevice] = useState(false);

  const handleCloseDevice = () => setShowDevice(false);
  const handleShowDevice = () => setShowDevice(true);

  return (
    <Container>
    <Card onClick={handleShowDevice}>
      <Card.Header style={{ background: "#004aad", color: "#f6f7fc" }}>
        Sensor
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6}>Valor sensado</Col>
          <Col xs={6}>Grafica</Col>
        </Row>
      </Card.Body>
    </Card>
    <Modal show={showDevice} onHide={handleCloseDevice}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title>Agregar dispositivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newDevice">
              <Form.Label>Tipo de Grafica</Form.Label>
              <Form.Select>
                <option>Grafica</option>
              </Form.Select>
            </Form.Group>
          </Form>
          Datos
          <Table striped>
            <thead>
              <tr>
                <th>Dato</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alimentación</td>
                <td>5v</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
