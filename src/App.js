import React, { useState } from 'react';
import styled from 'styled-components';
import MainContainer from './pages/MainPage/MainContainer';
import NavigationBar from './common/NavigationBar/NavigationBar';
import SideNavBar from './common/SideNavBar/SideNavBar';
import AboutMe from './pages/AboutMePage/AboutMeComponent';
import Portfolio from './pages/PortfolioPage/PortfolioComponent';
import Contact from './pages/ContactPage/ContactContainer';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #24292e;
  overflow: hidden;
`;

// background-image: linear-gradient(to bottom, #b5b5b5, #8a8a91, #5f626e, #343e4d, #051d2e);

function App() {
  const location = useLocation();
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <StyledMain>
      <NavigationBar open={openSideNav} setOpen={setOpenSideNav} />
      <SideNavBar open={openSideNav} setOpen={setOpenSideNav} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/about'>
            <AboutMe />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/' exact>
            <MainContainer />
          </Route>
        </Switch>
      </AnimatePresence>
    </StyledMain>
  );
}

export default App;
