import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  color: #fff;
  h1 {
    cursor:pinter;
    margin-top: 5rem;
    font-size: 3rem;
  }
  p {
    color: #f0f0f0;
    letter-spa
  }
`;

const MainContainer = props => {
  return (
    <StyledMain>
      <div>
        <h1>
          Hi,
          <br /> I'm Jagadeesh,
          <br />
          Full Stack developer
        </h1>
        <p>Front End Developer / Back End Developer / Freelancer</p>
      </div>
      <div></div>
    </StyledMain>
  );
};

export default MainContainer;
