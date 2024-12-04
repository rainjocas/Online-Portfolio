import React, {useState} from "react";
//import { Link } from "react-router-dom";
// @ts-ignore
//import logo from "../../logo.svg";
//import { ColorPalette } from "../utils/themes";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ColorPalette } from "../utils/themes";

export function NavigationBar() {
  return (
      <Navbar fixed= "top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export function SideBar() {
  return (
    <div className="bg-theme_jade">
      <div className="bg-theme_blue">hello world</div>
      {['md'].map((expand) => (
        <Navbar expand={expand} className="bg-body-tertiary mb-3 bg-theme_jade">
          <Container fluid>
            <Navbar.Brand href="#">Professional Photo Here</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;