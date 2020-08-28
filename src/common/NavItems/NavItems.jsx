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
    border-bottom: 2px solid transparent;
    color: #fff;
    transition: all 0.3s ease-in;
  }

  a:hover,
  a.${activeClass} {
    color: #fff;
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
  }

  @media (max-width: 850px) {
    ul {
      display: ${({ open }) => (open ? 'flex' : 'none')};
      flex-direction: column;
      z-index: 101;
      color: #000;
    }
    li {
      color: #000;
      margin: 2rem 0;
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
