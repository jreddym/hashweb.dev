import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
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

    &:hover,
    &:active {
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    ul {
      display: none;
    }
  }
`;

const NavItems = props => {
  return (
    <StyledNav open={props.open}>
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </StyledNav>
  );
};

export default NavItems;
