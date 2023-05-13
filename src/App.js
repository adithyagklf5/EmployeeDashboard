import { Routes, Route } from 'react-router-dom';
import Employee from './pages/EmployeeForm';
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Home from './pages/Home';



export default function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          



        </Routes>

      </Container>
    </div>
  );
}
