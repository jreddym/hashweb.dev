import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialMedia from './SocialMediaComponent';

const Section = styled(motion.section)`
  color: #ecf0f1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto 0 auto;

  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    letter-spacing: 1px;
  }
`;

// const StyledForm = styled.div`
//   margin: 3rem auto 0 auto;
//   padding: 3rem 0 2rem 0;
//   width: 400px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 5px;
// `;

// const InnerBox = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const sectionVariant = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 110,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const ContactContainer = () => {
  return (
    <Section variants={sectionVariant} initial='initial' animate='animate' exit='exit'>
      <div>
        <h1>Get in touch</h1>
        <p>
          If you wanna get in touch, talk to me about a project collaboration or just say hi, <br />
          send an email to <strong>jagadeesh@hashweb.dev</strong> or connect with me on{' '}
          <strong>social network</strong>
        </p>
        <SocialMedia />
      </div>
    </Section>
  );
};

export default ContactContainer;
