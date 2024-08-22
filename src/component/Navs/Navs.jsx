import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion'; 
import './Navs.css';
import logo from '../../images/logo.png';

const Navs = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" title='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Explore Food</Nav.Link>
              <Nav.Link href="#link">Reviews</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id='phone'>01067307254</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default Navs;
