import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/Firebasce/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user)


    return (
        <div>
            <Navbar collapseOnSelect expand="md" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning'>Laptop Gallery</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#products">Products</Nav.Link>
                            {
                                user?.email ?
                                    < >
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <Button onClick={logout} variant="dark">Logout</Button>
                                    </> :
                                    <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;