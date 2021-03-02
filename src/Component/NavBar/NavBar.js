import React from "react";

import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Link to={{pathname: "/"}}>
          <Navbar.Brand>Coctails</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav>
            <Link to={{pathname: "/"}}>
              <h5 style={{color: "white"}}>Home</h5>
            </Link>
            <Link to={{pathname: "/AboutUs"}}>
              <h5 style={{color: "white", marginLeft: "20px"}}>About Us</h5>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
