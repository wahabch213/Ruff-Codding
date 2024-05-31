import React, { useState, useRef } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "react-bootstrap";

const NavbarComponent = () => {
  const navRef = useRef(null);

  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <Navbar bg="dark" variant="dark" expand={false} ref={navRef}>
      <NavbarBrand href="#">Your Brand Name</NavbarBrand>
      <Nav className="me-auto" active={activeTab === "home"}>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "home"}
            onClick={() => handleTabChange("home")}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "about"}
            onClick={() => handleTabChange("about")}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "contact"}
            onClick={() => handleTabChange("contact")}
          >
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
