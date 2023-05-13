import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

export default function Employee() {
  const [showForm, setShowForm] = useState(false);

  const registerButtonClicked = () => {
    setShowForm(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center">
      <Container>
        {showForm ? (
          <div className="text-center">
            <Form
              style={{
                backgroundColor: "#f2f2f2",
                border: "1px solid #ddd",
                padding: "20px",
                float: "center",
              }}
            >
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="Name"
                  className="form-control"
                  id="exampleInputId"
                  aria-describedby="emailHelp"
                  placeholder="Enter Field Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName">Designation</label>
                <input
                  type="Designation"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Designation"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputLocation">Location</label>
                <input
                  type="locality"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputSalary">Salary</label>
                <input
                  type="salary"
                  className="form-control"
                  id="exampleInputSalary"
                  placeholder="Enter Your Salary"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        ) : (
          <Button variant="primary" size="lg" onClick={registerButtonClicked}>
            <i class="bi bi-person-add"></i> Register
          </Button>
        )}
      </Container>
    </div>
  );
}
