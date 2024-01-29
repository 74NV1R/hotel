import React, { useContext } from 'react'
import { useAppContext } from '../../Context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Hotel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Notice</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

        </>

    )
}

export default Header