import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const styles = {
    link: {
      color: "#fff"
    }
  }
  return (
    <div>
      <Navbar className="light" expand="md">
        <Container>
        <NavbarBrand style={styles.link} href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={styles.link} href="/">Logo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink>
              Simple Text
            </NavLink>
          </NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;