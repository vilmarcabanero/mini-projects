import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
      padding: 18px 10px;
    }

    @media (max-width: 768px) {
      flex-flow: column nowrap;
      /* background-color: #0D2538; */
      background-color:white;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }

    li {
      margin-left: 2em;
    }

    /* box-shadow: -10px 0px 10px 1px #aaaaaa; */
    box-shadow: -1px 0px 4px 2px #888888;

`


const RightNav = ({open}) => {
    return (
      <Ul open={open}>
          <li>Home </li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Sign in</li>
          <li>Sign up</li>
      </Ul>

    )
  }

  export default RightNav
