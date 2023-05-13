import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import "./style.css"

export default function Employee() {
  const [showForm, setShowForm] = useState(false);
  
  const registerButtonClicked = () => {
    setShowForm(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center">
      <Container>
        {showForm ? (
          <div>
            <Form style={{ backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '20px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
        ) : (
          <Button variant="primary" size="lg" onClick={registerButtonClicked}>
            <i class="bi bi-person-add"></i>  Register
          </Button>
        )}
      </Container>
    </div>
  );
}
