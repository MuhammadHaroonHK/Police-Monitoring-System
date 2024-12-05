import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Map from "./map";
import Video from "./Video";

function Dashboard() {
  const usersInZone = 5; // Example data for users in the red zone

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Home component in the middle */}
      <div className="container mt-3">
        <Home usersInZone={usersInZone} />
      </div>

      {/* Map component at the bottom */}
      <div className="container mt-3" style={{ height: "500px" }}>
        <Map />
      </div>
      
      <div className="container mt-3" style={{ height: "500px" }}>
      <Video />
      </div>
    
    </div>
  );
}

export default Dashboard;
