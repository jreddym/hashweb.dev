import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import me from '../../assets/svg/me.svg';

const StyledMain = styled(motion.section)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  height: 100%;
  color: #fff;
  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    color: #f0f0f0;
  }

  @media (max-width: 520px) {
    h1 {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.8rem;
      margin: 0 2rem;
    }
    p {
      margin-left: 2rem;
    }
  }
`;

const headerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const mainTitle = {
  initial: {
    y: '100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: 'string',
      stiffness: 80,
    },
  },
};

const subTitle = {
  initial: {
    x: '-100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2.5,
      type: 'spring',
      stiffness: 120,
    },
  },
};

const avatarMain = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const MainContainer = props => {
  return (
    <StyledMain variants={headerVariant} initial='initial' animate='animate' exit='exit'>
      <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}>
        <motion.h1 variants={mainTitle}>
          Hi,
          <br /> I'm <big>Jagadeesh</big>
          ,
          <br />
          Full Stack Web Developer
        </motion.h1>
        <motion.p variants={subTitle} initial='initial' animate='animate'>
          Front End Developer / Back End Developer / Freelancer
        </motion.p>
      </motion.div>
      <motion.div variants={avatarMain}>
        <img src={me} alt='Jagadeesh_Avatar' />
      </motion.div>
    </StyledMain>
  );
};

export default MainContainer;
