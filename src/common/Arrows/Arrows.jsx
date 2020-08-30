import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const arrow = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
    transition: {
      delay: 2,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.5,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  ${({ direction }) => direction}:5%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Arrows = ({ direction }) => {
  return (
    <Container direction={direction}>
      <motion.i
        variants={arrow}
        initial='initial'
        animate='animate'
        whileHover='hover'
        className={`fa fa-angle-${direction}`}
        aria-hidden='true'
        style={{ fontSize: '32px', color: '#fff' }}></motion.i>
    </Container>
  );
};

export default Arrows;
