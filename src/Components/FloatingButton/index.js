import "./style.css";
import { Plus, FileEarmarkText, DeviceSsd } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function FloatingButton() {
  const [showNewDevice, setShowNewDevice] = useState(false);
  const [showNewRegistry, setShowNewRegistry] = useState(false);

  const handleCloseDevice = () => setShowNewDevice(false);
  const handleShowDevice = () => setShowNewDevice(true);
  const handleCloseRegistry = () => setShowNewRegistry(false);
  const handleShowRegistry = () => setShowNewRegistry(true);

  return (
    <div class="btn-container">
      <input type="checkbox" id="btn-mas" />
      <div class="sub-btn">
        <a onClick={handleShowRegistry}>
          <FileEarmarkText size={"25px"} />
        </a>
        <a onClick={handleShowDevice}>
          <DeviceSsd size={"25px"} />
        </a>
      </div>
      <div class="btn-mas">
        <label for="btn-mas">
          <Plus />
        </label>
      </div>
      <Modal show={showNewRegistry} onHide={handleCloseRegistry}>
        <Modal.Header closeButton style={{ background: "#004aad", color:"#f6f7fc"}}>
          <Modal.Title>Agregar registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newRegistry">
              <Form.Label>Nombre del registro</Form.Label>
              <Form.Control
                placeholder="Introduce el nombre del registro"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseRegistry}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCloseRegistry}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNewDevice} onHide={handleCloseDevice}>
        <Modal.Header closeButton style={{ background: "#004aad", color:"#f6f7fc"}}>
          <Modal.Title>Agregar dispositivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newDevice">
              <Form.Label>Nombre del dispositivo</Form.Label>
              <Form.Control
                placeholder="Introduce el nombre del dispositivo"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDevice}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCloseDevice}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
