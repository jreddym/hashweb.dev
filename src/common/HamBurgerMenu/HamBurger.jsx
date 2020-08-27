import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.button`
  position: absolute;
  top: 8.2%;
  right: ${({ open }) => (open ? '4%' : '10%')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (min-width: 850px) {
    display: none;
  }
`;

const HamBurger = props => {
  return (
    <StyledMenu open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMenu>
  );
};

export default HamBurger;
