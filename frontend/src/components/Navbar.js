import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Nb = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">WW-Login</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto">
           <Link to='/home'>Home</Link>
           <Link to='/login'>Login</Link>
           <Link to='/register'>Register</Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    )
}

export default Nb
