import React from "react";
import { Container, Content } from "./styles";

import IronhackLogo from '../../assets/ironhack-logo.svg'
import NavbarIcon from '../../assets/menu-top.svg'

const Navbar = () => (
  <Container>
    <Content>
      <img src={IronhackLogo} alt="Ironhack Logo" />
      <img src={NavbarIcon} alt="Navbar Icon" />
    </Content>
  </Container>
);

export default Navbar;
