import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

const MainNav = () => (
  <Nav className='mr-auto'>
    <Nav.Link
      as={RouterNavLink}
      to='/'
      exact
      activeClassName='router-link-exact-active'
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to='/profile'
      exact
      activeClassName='router-link-exact-active'
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to='/contact'
      exact
      activeClassName='router-link-exact-active'
    >
      Contact
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {

  return (
    <Nav className='justify-content-end'>
      {false ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg='light' expand='md'>
      <Container>
        <Navbar.Brand as={RouterNavLink} className='logo' to='/' />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
