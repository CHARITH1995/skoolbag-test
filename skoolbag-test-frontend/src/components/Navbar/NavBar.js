import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";


const NavBar = () => {
  const [signInShow, setsignInShow] = useState(false);
  const [signUpShow, setsignUpShow] = useState(false);

  const handleClose = () =>{
    setsignInShow(false);
    setsignUpShow(false)
  }
  const handleSignInShow = () => setsignInShow(true);
  const handleSignUpShow = () => setsignUpShow(true);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">School Managment System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/school/add">Add a School</Nav.Link>
          </Nav>
          <NavDropdown title={"Charith"} id="basic-nav-dropdown">
            <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={handleSignInShow}>Sign In</Nav.Link>
          <Nav.Link onClick={handleSignUpShow}>Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <SignInModal 
        signInShow = {signInShow}
        handleClose = {handleClose}
        handleSignInShow = {handleSignInShow}
      />
      <SignUpModal 
      signUpShow = {signUpShow}
      handleClose = {handleClose}
      handleSignUpShow = {handleSignUpShow}
      />
    </div>
  );
};

export default NavBar;
