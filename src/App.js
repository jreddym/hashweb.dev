import React, { useState } from 'react';
import styled from 'styled-components';
import MainContainer from './pages/MainPage/MainContainer';
import NavigationBar from './common/NavigationBar/NavigationBar';
import SideNavBar from './common/SideNavBar/SideNavBar';

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #b5b5b5, #8a8a91, #5f626e, #343e4d, #051d2e);
`;

function App() {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <StyledMain>
      <NavigationBar open={openSideNav} setOpen={setOpenSideNav} />
      <SideNavBar open={openSideNav} setOpen={setOpenSideNav} />
      <MainContainer />
    </StyledMain>
  );
}

export default App;
