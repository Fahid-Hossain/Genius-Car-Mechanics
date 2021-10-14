import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand to="#home"><h4>Car-Mecanical-Store</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto me-4">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/home#experts">Our Experts</Nav.Link>
                         
                         {
                             !user.email ?     <Nav.Link as={Link} to="/login">Log-In</Nav.Link> :    <button onClick={logOut} className="btn btn-outline-secondary border-2">Sign-Out</button>
                         }
                        </Nav>
                        <Navbar.Text>
                            Signed in as: 
                                {
                                    user.displayName && <a href="#login"> { user.displayName }   </a>
                                }
                              
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;