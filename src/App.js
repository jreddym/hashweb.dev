import React, { useState } from 'react';
import styled from 'styled-components';
import MainContainer from './pages/MainPage/MainContainer';
import NavigationBar from './common/NavigationBar/NavigationBar';
import SideNavBar from './common/SideNavBar/SideNavBar';
import AboutMe from './pages/AboutMePage/AboutMeComponent';
import Portfolio from './pages/PortfolioPage/PortfolioComponent';
import { Route, Switch } from 'react-router-dom';

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #24292e;
  overflow: hidden;
`;

// background-image: linear-gradient(to bottom, #b5b5b5, #8a8a91, #5f626e, #343e4d, #051d2e);

function App() {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <StyledMain>
      <NavigationBar open={openSideNav} setOpen={setOpenSideNav} />
      <SideNavBar open={openSideNav} setOpen={setOpenSideNav} />
      <Switch>
        <Route path='/about' component={AboutMe} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </StyledMain>
  );
}

export default App;
