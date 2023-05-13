import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Nav
        className="justify-content-evenly bg-black py-3"
        activeKey="/"
        style={{ backgroundColor: "white", fontSize: "larger" }}
      >
        <Nav.Item>
          <Link to="/">
            <i class="bi bi-house-door-fill"></i> Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/employee">
            <i class="bi bi-person-badge"></i>Employee
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
