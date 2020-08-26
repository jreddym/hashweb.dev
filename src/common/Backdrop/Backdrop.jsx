import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #000;
  opacity: 0.4;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const Backdrop = props => {
  return <StyledBackdrop onClick={() => props.setOpen(false)} open={props.open}></StyledBackdrop>;
};

export default Backdrop;
