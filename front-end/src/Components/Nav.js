import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <div className="nav-objects d-flex justify-content-between align-items-center">
        <img
          src="images/logo.png"
          alt="img cannot be displayed"
          className="logo"
        ></img>
        <Button variant="info" className="text-white" onClick={handleShow}>
          About
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Welcome to our medical imaging site! Here, you can upload an image
              of a mole and we will tell you whether its cancerous or not. We
              built this using a ML Model (for details check the GitHub
              repository :D) that has an accuracy of 94%! We'd like to apologize
              for the 6% of the time when you're told that you have cancer and a
              week to live when you don't lol!
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Understood!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}

export default Nav;
