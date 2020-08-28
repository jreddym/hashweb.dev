import React from 'react';
import styled from 'styled-components';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../Backdrop/Backdrop';

const SideNav = styled.div`
  position: fixed;
  height: 100%;
  width: ${({ open }) => (open ? '300px' : '0')};
  top: 0;
  right: 0;
  background-color: #000;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 18px;
  z-index: 100;
`;

const SideNavBar = props => {
  return (
    <div onClick={() => props.setOpen(false)}>
      <Backdrop setOpen={props.setOpen} open={props.open} />
      <SideNav open={props.open}>
        <NavItems open={props.open} />
      </SideNav>
    </div>
  );
};

export default SideNavBar;
