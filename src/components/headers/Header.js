import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo1.png';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle sign in functionality
    navigate('/signin');
  };

  const handleSignUp = () => {
    // Handle sign up functionality
    navigate('/signup');
  };

  return (
    <>
      <header className='nav__bar'>
        <div className='container'>
          <Navbar expand='lg'>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img src={logo} alt='Logo' className='logo' />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='navbarSupportedContent' />
            <Navbar.Collapse id='navbarSupportedContent' className='justify-content-between'>
              <Nav className='mr-auto header__link'>
                <LinkContainer to='/'>
                  <Nav.Link className='header__link'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/serice'>
                  <Nav.Link className='header__link'>Series</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/movie'>
                  <Nav.Link className='header__link'>Movies</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/pages'>
                  <Nav.Link className='header__link'>Pages</Nav.Link>
                </LinkContainer>
              </Nav>
              <Form className=' header__form d-flex justify-content-between gap-2'>
                <Button className=' header__button sign-in' onClick={handleSignIn}>
                  Sign In
                </Button>
                <Button className=' header__button sign-up ml-2' onClick={handleSignUp}>
                  Sign Up
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Outlet />
      </header>
    </>
  );
};

export default Header;