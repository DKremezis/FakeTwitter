import React from "react";
import { Navbar } from "react-bootstrap";

const navBar = () => {

    // const style = {
    //     Navbar:{
    //         backgroundColor: 'orange'
    //     }
    // }

    // bootstrapUtils.addStyle(Navbar, 'Navbar');

  return (
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Fake Twitter</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>   
      </Navbar>    
  );
};

export default navBar;
