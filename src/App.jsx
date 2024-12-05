import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./components/map.jsx";
import Notification from "./components/Notification";
import Dashboard from "./components/Dashboard";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Dashboard />} /> {/* Dashboard route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/map" element={<Map />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



