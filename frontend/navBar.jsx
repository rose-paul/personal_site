import React from 'react';
import Nav from "react-bootstrap/Nav";

const NavBar = ({changeTab}) => (
  <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
            <Nav.Link onClick={() => changeTab(1)}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link onClick={() => changeTab(2)}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link onClick={() => changeTab(3)}>Projects</Nav.Link>
      </Nav.Item>
  </Nav>
);

export default NavBar;