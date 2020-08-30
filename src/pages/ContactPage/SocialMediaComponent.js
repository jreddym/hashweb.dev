import React from 'react';
import Ball from '../../common/Ball/Ball';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 500px;
  display: flex;
  margin-top: 4rem;
  justify-content: space-around;

  @media (max-width: 800px) {
    justify-content: start;
  }
`;

const Icon = styled.div`
  position: relative;
  i {
    position: absolute;
    top: -5px;
    left: -5px;
  }

  div {
    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    position: static;
    margin: 2rem;
    i {
      position: static;
      top: 0;
      left: 0;
    }
  }
`;

const Ball1 = {
  initial: {
    opacity: 1,
  },
  animate: {
    x: [-1000, 0, 1057, 800, -458, 0],
    y: [-200, -300, -100, 350, 250, 0],
    opacity: 0,
    transition: {
      x: {
        delay: 1,
        duration: 2,
        ease: 'linear',
      },
      y: {
        delay: 1,
        duration: 2,
        ease: 'linear',
      },
      opacity: {
        delay: 2.9,
        ease: 'easeInOut',
      },
    },
  },
};

const Ball2 = {
  initial: {
    opacity: 1,
  },
  animate: {
    x: [1200, -591, 829, 10, -591, -120, 0],
    y: [200, 300, -100, -358, -50, 350, 0],
    opacity: 0,
    transition: {
      x: {
        delay: 1.5,
        duration: 3.2,
        ease: 'linear',
      },
      y: {
        delay: 1.5,
        duration: 3.2,
        ease: 'linear',
      },
      opacity: {
        delay: 4.6,
        ease: 'easeInOut',
      },
    },
  },
};

const Ball3 = {
  initial: {
    opacity: 1,
  },
  animate: {
    x: [-500, -300, -230, 300, 350, 430, 500, 650, 810, 430, 0],
    y: [1200, -359, -180, -359, -297, -359, -297, -359, -100, 350, 0],
    opacity: 0,
    transition: {
      x: {
        delay: 2,
        duration: 3.5,
        ease: 'linear',
      },
      y: {
        delay: 2,
        duration: 3.5,
        ease: 'linear',
      },
      opacity: {
        delay: 5.4,
        ease: 'easeInOut',
      },
    },
  },
};

const Ball4 = {
  initial: {
    opacity: 1,
  },
  animate: {
    x: [630, 500, 0],
    y: [-500, 350, 0],
    opacity: 0,
    transition: {
      x: {
        delay: 1.5,
        duration: 3.2,
        ease: 'linear',
      },
      y: {
        delay: 1.5,
        duration: 3.2,
        ease: 'linear',
      },
      opacity: {
        delay: 4.6,
        ease: 'easeInOut',
      },
    },
  },
};

const facebook = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.1,
      ease: 'linear',
    },
  },
};

const github = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 4.7,
      ease: 'linear',
    },
  },
};

const linkedIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 5.7,
      ease: 'linear',
    },
  },
};

const twitter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 4.7,
      ease: 'linear',
    },
  },
};

const SocialMediaComponent = () => {
  return (
    <Container>
      <Icon>
        <motion.div variants={Ball1} initial='initial' animate='animate'>
          <Ball />
        </motion.div>
        <a
          href='https://www.facebook.com/jagadeeswarareddym/'
          target='_blank'
          rel='noopener noreferrer'>
          <motion.i
            variants={facebook}
            initial='initial'
            animate='animate'
            className='fa fa-facebook-official'
            style={{ fontSize: '32px', color: '#fff' }}></motion.i>
        </a>
      </Icon>
      <Icon>
        <motion.div variants={Ball2} animate='animate'>
          <Ball />
        </motion.div>
        <a href='https://github.com/jreddym' target='_blank' rel='noopener noreferrer'>
          <motion.i
            variants={github}
            initial='initial'
            animate='animate'
            className='fa fa-github'
            style={{ fontSize: '32px', color: '#fff' }}></motion.i>
        </a>
      </Icon>
      <Icon>
        <motion.div variants={Ball3} animate='animate'>
          <Ball />
        </motion.div>
        <a href='https://www.linkedin.com/in/jreddym/' target='_blank' rel='noopener noreferrer'>
          <motion.i
            variants={linkedIn}
            initial='initial'
            animate='animate'
            className='	fa fa-linkedin-square'
            style={{ fontSize: '32px', color: '#fff' }}></motion.i>
        </a>
      </Icon>
      <Icon>
        <motion.div variants={Ball4} animate='animate'>
          <Ball />
        </motion.div>
        <a href='https://twitter.com/jreddym24' target='_blank' rel='noopener noreferrer'>
          <motion.i
            variants={twitter}
            initial='initial'
            animate='animate'
            className='fa fa-twitter'
            style={{ fontSize: '32px', color: '#fff' }}></motion.i>
        </a>
      </Icon>
    </Container>
  );
};

export default SocialMediaComponent;
