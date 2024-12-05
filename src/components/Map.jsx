import React, { useState, useEffect } from 'react';
import { Circle, MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { v4 as uuidv4 } from 'uuid'; // Unique ID generator
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

// Red Zone Handler Component
function RedZoneHandler({ redZones, setRedZones }) {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;

            const userRange = prompt('Enter the radius for the red zone (in kilometers):', 0.2);
            const radiusKm = parseFloat(userRange);

            if (radiusKm > 0) {
                const phoneNumber = prompt('Enter the phone number to associate with this red zone:');
                if (phoneNumber && phoneNumber.trim() !== "") {
                    const radiusMeters = radiusKm * 1000;
                    const newRedZone = {
                        id: uuidv4(), // Generate a unique ID for the red zone
                        lat,
                        lng,
                        radius: radiusMeters,
                        phone: phoneNumber,
                    };
                    const updatedZones = [...redZones, newRedZone];
                    setRedZones(updatedZones); // Add the new red zone
                    localStorage.setItem('redZones', JSON.stringify(updatedZones)); // Save to localStorage
                } else {
                    alert('Phone number is required to create a red zone.');
                }
            } else {
                alert('Please enter a valid radius in kilometers.');
            }
        },
    });

    return (
        <>
            {redZones.map((zone) => (
                <Circle
                    key={zone.id}
                    center={[zone.lat, zone.lng]}
                    radius={zone.radius}
                    pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }}
                >
                    <Popup>
                        <div>
                            <p><strong>Radius:</strong> {zone.radius} meters</p>
                            <p><strong>Phone:</strong> {zone.phone}</p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering the map click event
                                    const updatedZones = redZones.filter((z) => z.id !== zone.id);
                                    setRedZones(updatedZones); // Update state with filtered zones
                                    localStorage.setItem('redZones', JSON.stringify(updatedZones)); // Update localStorage
                                }}
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                }}
                            >
                                Remove Red Zone
                            </button>
                        </div>
                    </Popup>
                </Circle>
            ))}
        </>
    );
}

// Main Map Component
function Map() {
    const navigate = useNavigate(); // Initialize navigate hook
    const location = useLocation(); // Get the current location from react-router-dom
    const [userLocation, setUserLocation] = useState(null); // User location
    const [locationError, setLocationError] = useState('');
    const [redZones, setRedZones] = useState([]); // Red zones

    const locationIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149068.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    // Load saved red zones from localStorage when the component mounts
    useEffect(() => {
        const savedRedZones = localStorage.getItem('redZones');
        if (savedRedZones) {
            setRedZones(JSON.parse(savedRedZones)); // Restore red zones from localStorage
        }
    }, []);

    // Fetch user location on component mount
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]); // Set user location
                },
                (error) => {
                    console.error('Location error: ', error);
                    if (error.code === error.PERMISSION_DENIED) {
                        setLocationError('Permission to access location was denied.');
                    } else if (error.code === error.POSITION_UNAVAILABLE) {
                        setLocationError('Location information is unavailable.');
                    } else if (error.code === error.TIMEOUT) {
                        setLocationError('The request to get user location timed out.');
                    } else {
                        setLocationError('An unknown error occurred.');
                    }
                }
            );
        } else {
            setLocationError('Geolocation is not supported by this browser.');
        }
    }, []);

    // Only display back button when the current route matches the map route
    const showBackButton = location.pathname === '/map';

    return (
        <div className="container-fluid">
            {locationError && <div>{locationError}</div>}

            {/* Conditionally render the Back button */}
            {showBackButton && (
                <button
                    onClick={() => navigate('/home')} // Navigate to the Dashboard (home)
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        zIndex: 1000, // Ensure it's on top of the map
                    }}
                >
                    Back to Dashboard
                </button>
            )}

            <MapContainer
                center={userLocation || [34.3500, 71.5500]} // Default to KPK center if location not available
                zoom={userLocation ? 15 : 13} // Zoom closer if user location is available
                style={{ height: '100vh', width: '100%' }}
                scrollWheelZoom // Enable scroll zoom for user convenience
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />

                {userLocation && (
                    <Marker position={userLocation} icon={locationIcon}>
                        <Popup>You are here!</Popup>
                    </Marker>
                )}

                <RedZoneHandler redZones={redZones} setRedZones={setRedZones} />
            </MapContainer>
        </div>
    );
}

export default Map;
