import React from 'react'
import {Button,Navbar,Nav,Container,Offcanvas,Form} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import headerlogo from '../../images/Header/logo.png';
import {NavLink,BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './style.css'


const LoginNav = () => {
    
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand}  expand={expand} className="nav loginNav" fixed="top">
            <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={headerlogo}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="Kalundewa"
              />
            </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    KALUNDEWA
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Nav className="justify-content-center flex-grow-1 pe-3 ">
                    <Nav.Link>
                      <NavLink to="/" className="navItem ">HOME</NavLink>
                    </Nav.Link>
                   
                    <Nav.Link>
                      <NavLink to="/offer" className="navItem">OFFERS</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/gallery" className="navItem">GALLERY</NavLink>
                    </Nav.Link>
                   
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
       
  
       
  
      </>
       
    )
}

export default LoginNav
