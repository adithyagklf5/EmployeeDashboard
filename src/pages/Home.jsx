import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="d-flex justify-content-center my-5">
      <Table striped bordered hover style={{ backgroundColor: "#00BFFF" }}>
        <caption
          style={{ captionSide: "top", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Employee Dashboard
        </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
