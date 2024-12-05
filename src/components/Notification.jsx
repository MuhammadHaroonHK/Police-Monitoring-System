import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification({ personDetails, zoneDetails, time }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home"); // Redirect to home or another page after closing the popup
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561211.png" // Alert icon
            alt="Alert Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <h4 style={{ color: "#dc3545" }}>Alert: Person Entered Red Zone!</h4>
        <p>A monitored individual has entered a restricted red zone.</p>
        <ul style={{ textAlign: "left", margin: "0 auto", display: "inline-block" }}>
          <li><strong>Phone Number:</strong> {personDetails?.phone || "N/A"}</li>
          <li>
            <strong>Zone Location:</strong> Latitude: {zoneDetails?.lat || "N/A"}, Longitude: {zoneDetails?.lng || "N/A"}
          </li>
          <li><strong>Time:</strong> {time || new Date().toLocaleString()}</li>
        </ul>
        <p>Immediate action may be required.</p>
        <button
          onClick={handleClose}
          style={{
            marginTop: "20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Notification;
