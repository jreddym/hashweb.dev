import React from 'react';
import Logo from '../Logo/Logo';
import NavItem from '../NavItems/NavItems';
import HamBurger from '../HamBurgerMenu/HamBurger';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledNavBar = styled(motion.div)`
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

const nanBar = {
  initial: {
    y: '-100vh',
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
    },
  },
};

const NavigationBar = props => {
  return (
    <StyledNavBar variants={nanBar} initial='initial' animate='animate'>
      <Logo />
      <StyledDiv>
        <NavItem open={props.open} />
        <HamBurger open={props.open} setOpen={props.setOpen} />
      </StyledDiv>
    </StyledNavBar>
  );
};

export default NavigationBar;
