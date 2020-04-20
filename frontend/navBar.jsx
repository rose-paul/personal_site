import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";

const NavBar = ({changeTab}) => (
  <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
            <p onClick={() => changeTab(1)}>Home</p>
      </Nav.Item>
      <Nav.Item>
            <p onClick={() => changeTab(2)}>About</p>
      </Nav.Item>
      <Nav.Item>
            <p onClick={() => changeTab(3)}>Projects</p>
      </Nav.Item>
  </Nav>
);

export default NavBar;