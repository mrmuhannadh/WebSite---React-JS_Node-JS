import React from 'react'
import { Button, Navbar, Nav, Container, Offcanvas, Form } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
import headerlogo from '../../images/Header/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

const TopNav = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    //console.log(window. scrollY);
    if (window.scrollY >= 80) {
      setColor(true);

    } else {
      setColor(false);
    }
  };

  let navigate = useNavigate(); 
  const bookNow = () =>{ 
    let path = `/gallery`; 
    navigate(path);
  }
  window.addEventListener('scroll', changeColor);
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={color ? 'md-3 navbarCustom scrolledHeader' : 'mb-3 navbarCustom'} fixed="top">
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
                  <Nav.Link >
                    <NavLink to="/accomandation" className="navItem aa">ACCOMANDATION</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/experiences" className="navItem aa">EXPERIENCES</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/dinning" className="navItem aa">DINNING</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/blog" className="navItem">BLOGS</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/offer" className="navItem">OFFERS</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/gallery" className="navItem">GALLERY</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/contact" className="navItem">CONTACT US</NavLink>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">

                  <Button className="myBtn" onClick={bookNow}>BOOK US NOW</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}




    </>

  )
}

export default TopNav
