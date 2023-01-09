import "./style.css";
import { Plus, FileEarmarkText, DeviceSsd, PlusCircle } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { createRegistry,addDeviceToRegistry, deleteRegistry } from "../../Utils/Functions";

export default function FloatingButton() {
  const [showNewDevice, setShowNewDevice] = useState(false);
  const [showNewRegistry, setShowNewRegistry] = useState(false);
  const [showDeleteReg, setDeleteReg] = useState(false);

  const handleCloseDevice = () => setShowNewDevice(false);
  const handleShowDevice = () => setShowNewDevice(true);
  const handleCloseRegistry = () => setShowNewRegistry(false);
  const handleShowRegistry = () => setShowNewRegistry(true);
  const handleCloseDeleteReg= () => setDeleteReg(false);
  const handleShowDeleteReg = () => setDeleteReg(true);

  const [registry_name, setRegName] = useState("");
  const [device_name, setDev] = useState("");
  const [dev_desc, setDescription] = useState(false);
  

  const registryChange =(registry_name) => setRegName(registry_name);
  const deviceChange =(device_name) => setDev(device_name);
  const descriptionChange=(dev_desc) => setDescription(dev_desc);
  
  const accountId=process.env.REACT_APP_NEAR_ACCOUNT_ID;
  console.log(registry_name);
  console.log(device_name);
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
          <Plus size={"40px"} />
        </label>
      </div>
      {/* New Registry Modal */}
      <Modal show={showNewRegistry} onHide={handleCloseRegistry}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title>
            <FormattedMessage
              id="app.addRegistryText"
              defaultMessage="Add Registry"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newRegistry">
              <Form.Label>
                <FormattedMessage
                  id="app.addRegistryTextfield"
                  defaultMessage="Data"
                />
              </Form.Label>
              <Form.Control id ="txtNR" type="text" onChange={()=>registryChange(document.getElementById("txtNR").value)}
                // placeholder={
                //   <FormattedMessage
                //     id="app.addRegistryPlaceholder"
                //     defaultMessage="Data"
                //   />
                // }
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger"  onClick={handleShowDeleteReg}>
              <FormattedMessage id="app.delBtn" defaultMessage="Delete"/>
                </Button>
          <Button variant="danger" onClick={handleCloseRegistry}>
            <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
          </Button>
          <Button variant="primary" onClick={
            () => {createRegistry(accountId,registry_name
            )} }>
            <FormattedMessage id="app.addBtn" defaultMessage="Add"  />
          </Button>
        </Modal.Footer>
      </Modal>

            {/* New Device Modal */}
      <Modal show={showNewDevice} onHide={handleCloseDevice}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title>
            <FormattedMessage
              id="app.addSensorText"
              defaultMessage="Add sensor"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newDevice">

            <Form.Label>
                <FormattedMessage
                  id="app.addRegistryTextfield"
                  defaultMessage="Data"
                />
              </Form.Label>
              <Form.Control id ="txtNR" type="text" 
              onChange={()=>registryChange(document.getElementById("txtNR").value)}
                // placeholder={
                //   <FormattedMessage
                //     id="app.addRegistryPlaceholder"
                //     defaultMessage="Data"
                //   />
                // }
                autoFocus
              />
              <Form.Label>
                <FormattedMessage
                  id="app.addSensorTextfield"
                  defaultMessage="Sensor name"
                />
              </Form.Label>
              <Form.Control id ="txtND" type="text" 
              onChange={()=>deviceChange(document.getElementById("txtND").value)}
               
               // placeholder={
                //   <FormattedMessage
                //     id="app.addSensorPlaceholder"
                //     defaultMessage="Data"
                  // />
                // }
                autoFocus
              />
              <Form.Label>
                <FormattedMessage
                  id="app.addSensorDescription"
                  defaultMessage="Sensor Description"
                />
                
              </Form.Label>
              <Form.Control id ="txtDD" type="text" 
              onChange={()=>descriptionChange(document.getElementById("txtDD").value)}
               
               // placeholder={
                //   <FormattedMessage
                //     id="app.addSensorPlaceholder"
                //     defaultMessage="Data"
                  // />
                // }
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDevice}>
          <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
          </Button>
          <Button variant="primary" onClick={() => {
            addDeviceToRegistry(
            registry_name,
            device_name,
            document.getElementById("txtDD").value,
            accountId,
            )} }>
          <FormattedMessage id="app.addBtn" defaultMessage="Add"/>
          </Button>
          
        </Modal.Footer>
      </Modal>
      

      

           {/*------------------------- Delete Modal------------------------------  */}
           <Modal show={showDeleteReg} onHide={handleCloseDeleteReg}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title>
            <FormattedMessage
              id="app.delRegistry"
              defaultMessage="Delete Device From Registry"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newRegistry">
              <Form.Label>
                <FormattedMessage
                  id="app.delRegistry"
                  defaultMessage="Data"
                />
              </Form.Label>
              <Form.Control id ="txtDeR" type="text" onChange={()=>registryChange(document.getElementById("txtDeR").value)}
                // placeholder={
                //   <FormattedMessage
                //     id="app.addRegistryPlaceholder"
                //     defaultMessage="Data"
                //   />
                // }
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleCloseDeleteReg}>
            <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
          </Button>
          <Button variant="outline-success" onClick={()=>deleteRegistry(
          registry_name,
          accountId,
          )}>
            <FormattedMessage id="app.delBtn" defaultMessage="Delete"  />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
