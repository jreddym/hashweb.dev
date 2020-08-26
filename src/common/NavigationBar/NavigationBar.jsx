import React from 'react';
import Logo from '../Logo/Logo';
import NavItem from '../NavItems/NavItems';
import HamBurger from '../HamBurgerMenu/HamBurger';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  width: 85%;
  height: 18vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const StyledDiv = styled.div`
  margin-top: 2rem;
`;

const NavigationBar = props => {
  return (
    <StyledNavBar>
      <Logo />
      <StyledDiv>
        <NavItem open={props.open} />
        <HamBurger open={props.open} setOpen={props.setOpen} />
      </StyledDiv>
    </StyledNavBar>
  );
};

export default NavigationBar;
