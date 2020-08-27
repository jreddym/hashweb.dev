import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClass = 'active';

const StyledNav = styled.nav.attrs({ activeClass })`
  ul {
    display: inline-flex;
    list-style: none;
    font-size: 1.3rem;
    transition: all 0.5s ease-in;
  }

  ul li {
    margin-right: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  a:hover,
  a.${activeClass} {
    color: #fff;
  }

  @media (max-width: 850px) {
    ul {
      display: none;
    }
  }
`;

const NavItems = props => {
  return (
    <StyledNav open={props.open}>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio'>PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavItems;
