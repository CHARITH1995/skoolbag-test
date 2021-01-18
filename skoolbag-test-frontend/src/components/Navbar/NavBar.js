import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { clearToken ,userFirstName ,userlastName ,token } from '../../config/token';
import { toast } from "react-toastify";

const NavBar = () => {
  const [signInShow, setsignInShow] = useState(false);
  const [signUpShow, setsignUpShow] = useState(false);
  const history = useHistory();


  const handleClose = () => {
    setsignInShow(false);
    setsignUpShow(false);
  };

  const handleSignInShow = () => setsignInShow(true);
  const handleSignUpShow = () => setsignUpShow(true);

  const signOut = () =>{
    toast.warn("logged out !")
    clearToken()
    window.location.reload(true);
  }

  const addSchool = ()=>{
    if(!token()){
      toast.warn("signIn or signUp first!")
      setsignInShow(true);
    }else{
      history.push('/school/add');
    }
  }
  
  const goHome = () =>{
    history.push('/');
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">School Managment System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick = {goHome}>Home</Nav.Link>
            <Nav.Link onClick = {addSchool}>Add a School</Nav.Link>
          </Nav>
          {!token() ? (
            <Nav>
              <Nav.Link onClick={handleSignInShow}>Sign In</Nav.Link>
              <Nav.Link onClick={handleSignUpShow}>Sign Up</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <NavDropdown title={userFirstName()} id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/user">Profile</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <SignInModal
        signInShow={signInShow}
        handleClose={handleClose}
        handleSignInShow={handleSignInShow}
      />
      <SignUpModal
        signUpShow={signUpShow}
        handleClose={handleClose}
        handleSignUpShow={handleSignUpShow}
      />
    </div>
  );
};

export default NavBar;
