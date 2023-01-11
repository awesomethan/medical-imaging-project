import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <div className="nav-links">
        <img
          src="images/logo.png"
          alt="img cannot be displayed"
          className="logo"
        ></img>
        <Button variant="info" onClick={handleShow}>
          About
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Welcome to our medical imaging site! Here, you can upload an image
              and we will tell you ... It has an accuracy of
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Understood!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}

export default Nav;
