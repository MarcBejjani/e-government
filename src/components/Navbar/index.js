import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/fees' activeStyle>
            Pay Your Fees
          </NavLink>
          <NavLink to='/book' activeStyle>
            Book an Appointment
          </NavLink>
          <NavLink to='/request' activeStyle>
            Ask request
          </NavLink>
          <NavLink to='/locations' activeStyle>
            Locations
          </NavLink>
          <NavLink to='/vote' activeStyle>
            Vote
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;