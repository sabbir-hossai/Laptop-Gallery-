import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/Firebasce/useAuth';

const Navigation = () => {
    const { user } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Laptop Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/features">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#products">Products</Nav.Link>
                            {
                                user.email ?
                                    < >
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <Button variant="dark">Logout</Button>
                                    </> :
                                    <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                            }

                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;