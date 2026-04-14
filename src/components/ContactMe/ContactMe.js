import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ContactMe = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // You can integrate your email logic here
    console.log("Email:", email);
    console.log("Message:", message);
    setShow(false);
  };

  return (
    <>
      {/* Sticky Contact Me Button */}
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        style={{
          position: "fixed",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: 9999,
          borderRadius: "5px 0 0 5px",
          padding: "10px 20px",
        }}
      >
        Contact Me
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactMe;
