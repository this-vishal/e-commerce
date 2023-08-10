import React from "react";
import MenuItems from './MenuItems';

import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function AdminNavbar({ setIsOpen, isOpen }) {

    const bar = "fa-sharp fa-solid fa-bars";
    const cross = "fa-solid fa-circle-xmark";


    return (

        <>

            <Navbar expand="lg" className="bg-body-tertiary container-nav" >
                <Container>
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>

                        <i className={isOpen ? bar : cross}></i>

                    </div>
                    <Navbar.Brand className="font-style" href="#home">Shopping Cart</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                     
                        <Nav className="me-auto">
                        <Nav.Link className="font-style" href="">Welcomr, Admin</Nav.Link>
                            <Nav.Link className="font-style" href="/admin-logout">Logout</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </>

    )

};
export default AdminNavbar;