import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import HamburgerSVG from "../../assets/sidebar";
import NavLink, { NavLinkMobile } from "./NavLink";
import Home from "../../assets/Home"

export function NavigationBar() {
  return (
    <nav className="flex items-center sticky top-0 py-2 z-20 bg-theme_orange backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Navbar tabIndex={0} fixed= "top" expand="lg" className="bg-body-tertiary">
        <div className="flex flex-row justify-between place-content-between">
          <Link className="no-underline absolute pl-3" to="/">
            <div className="flex flex-row align justify-center rounded-xl bg-white w-16 h-12">
              <a href = "/" target = "_target" className=""><Home/></a>
            </div>
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
    <div className="flex flex-row justify-between py-2">
      <Link className="no-underline text-darkGreen pl-5" to="/">
        <a href = "/" target = "_target"><Home/></a>
      </Link>
        <nav tabIndex={0} onKeyDown={toggleShow} className="focus-visible:ring"> 
        <HamburgerSVG className="w-[40px] h-[40px] mr-[10px]" onClick={toggleShow} onKeyDown={toggleShow} />
      </nav>
    </div>
    <Offcanvas show={show} onHide={handleClose} {...props}> {/*responsive design can be removed if glitchy by deleting responsive = "md" */}
      <Offcanvas.Header closeButton className = ""/>
      <Offcanvas.Body role="navigation" className="align-center justify-content-start flex-grow-1 pe-3 flex flex-col items-center">
        <NavLinkMobile src={"/"}>About</NavLinkMobile>
        <NavLinkMobile src={"/experience"}>Experience</NavLinkMobile>
        <NavLinkMobile src={"/projects"}>Projects</NavLinkMobile>
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