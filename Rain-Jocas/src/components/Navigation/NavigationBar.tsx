import React, {useState} from "react";
//import { Link } from "react-router-dom";
// @ts-ignore
//import logo from "../../logo.svg";
//import { ColorPalette } from "../utils/themes";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SkipLink from './SkipLink';
import { Link } from "react-router-dom";
import HamburgerSVG from "../../assets/sidebar";
import NavLink, { NavLinkMobile } from "./NavLink";

export function NavigationBar() {
  return (
    <nav className="flex items-center sticky top-0 py-2 z-20 bg-theme_lightGreen backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Navbar fixed= "top" expand="lg" className="bg-body-tertiary">
        <div className="flex flex-row justify-between place-content-between">
          <Link className="no-underline absolute left-5" to="/">
            <Navbar.Brand href="#">Professional Photo Here</Navbar.Brand>
          </Link>
          <Nav className= "flex flex-row items-center bg-pine rounded-md absolute right-5" role="navigation">
            <NavLink src = "/">About</NavLink>
            <NavLink src = "/experience">Experience</NavLink>
            <NavLink src = "/projects">Projects</NavLink>
          </Nav>
        </div>
      </Navbar>
    </nav>
  );
}

/**
 * SideBar component:
 * This component handles navigation on mobile. It will be used to navigate between pages.
 */
function SideBar({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  
  return (
    <div role="banner">
    <SkipLink skipTo="#main"></SkipLink>
    <div className="flex flex-row justify-between">
      <Link className="no-underline text-darkGreen pl-5" to="/">
        <Navbar.Brand href="#">Professional Photo Here</Navbar.Brand>
      </Link>
      <div tabIndex={0} onKeyDown={toggleShow}>
        <HamburgerSVG className="w-[40px] h-[40px] mr-[10px]" onClick={toggleShow} onKeyDown={toggleShow} />
      </div>
    </div>
    <Offcanvas show={show} onHide={handleClose} {...props}> {/*responsive design can be removed if glitchy by deleting responsive = "md" */}
      <Offcanvas.Header closeButton className = "">
        <NavLinkMobile src = "/">
        <Navbar.Brand href="#">A Header image/text if I want one</Navbar.Brand>
        </NavLinkMobile>
      </Offcanvas.Header>
      <Offcanvas.Body role="navigation" className="align-center">
        <Nav className="justify-content-end flex-grow-1 pe-3 flex flex-col items-center">
          <NavLinkMobile src={"/"}>About</NavLinkMobile>
          <NavLinkMobile src={"/experience"}>Experience</NavLinkMobile>
          <NavLinkMobile src={"/projects"}>Projects</NavLinkMobile>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </div>
  );
}

/**
 * Menu component:
 * This component is what displays the Sidebar component, and allows it to be called more easily.
 */
export function Menu() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <SideBar key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}


export default NavigationBar;