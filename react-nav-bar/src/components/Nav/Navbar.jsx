import React from 'react';
import styled from 'styled-components';
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    
    li {
      padding: 18px 10px
    }
  }

  @media (max-width: 768px) {
    > ul {
      display: none;
    }
  }

`

const Navbar = () => {
  return (
    <>
    <Nav>
      <div className='logo'>
        App
      </div>
      <ul>
        <li>Home </li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </Nav>
    <Burger/>
    </>
  )
}



export default Navbar