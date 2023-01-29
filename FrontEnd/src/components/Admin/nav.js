import React from 'react'
import {Navbar,Nav,Container,Offcanvas} from 'react-bootstrap';
import headerlogo from '../../images/Header/logo.png';
import {NavLink} from 'react-router-dom';

const AdminNav = () => {
  let user = localStorage.getItem('theUserName');
  function logOut(){
    
    localStorage.removeItem('theUserName');

  }
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
                  <NavLink to="/dash" className="navItem ">DASHBOARD</NavLink>
                </Nav.Link>
               
                <Nav.Link>
                  <NavLink to="/adminoffer" className="navItem">OFFERS</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/admingallery" className="navItem">GALLERY</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/" onClick={logOut} className="navItem">LOGOUT</NavLink>
                </Nav.Link>

              </Nav>
              Welcome {user}
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
   

   

  </>
  )
}

export default AdminNav
