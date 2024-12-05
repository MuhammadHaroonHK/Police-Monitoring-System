import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home({ usersInZone }) {
    return (
        <>
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card.Body className="text-center p-4">
                        <h1 className="text-danger mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            Welcome to the Police Monitoring System
                        </h1>
                        <p className="lead text-muted">
                            Real-time monitoring for enhanced safety and security.
                        </p>
                        <h3 className="text-center mt-4">
                            Users currently in Red Zone:
                            <span className="badge bg-danger ms-2" style={{ fontSize: '1.2rem' }}>
                                {usersInZone}
                            </span>
                        </h3>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
        
        </>
    );
}

export default Home;
