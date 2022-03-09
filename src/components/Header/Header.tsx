import React from 'react';
import './styles';
import { Container } from './styles';
import { Navbar, NavLink, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logoOne.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">
                  <img src={logoImg} className="img_config" alt="" />
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <NavLink>
                <Link to="/characters">Personagens Marvel</Link>
              </NavLink>
              <NavLink>
                <Link to="/movies">Comics Marvel</Link>
              </NavLink>
              <NavLink>
                <Link to="/events">Eventos Marvel</Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
