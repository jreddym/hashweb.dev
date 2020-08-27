import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import me from '../../assets/svg/only_me.svg';
import hi from '../../assets/svg/Hi.svg';

const Container = styled.section`
  padding-bottom: 2rem;
`;

const Section = styled(motion.div)`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 5rem;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #fff;
  }
`;

const Avatar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: -120px;
  @media (max-width: 1050px) {
    display: none;
  }
`;

const AvatarHi = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  right: 10px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

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
};

const Avatar_ME = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3,
      ease: 'linear',
    },
  },
};

const Avatar_Hi = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3.5,
      duration: 1,
    },
  },
};

const AboutMeComponent = () => {
  return (
    <Container>
      <Section variants={sectionVariant} initial='initial' animate='animate'>
        <p>
          I'm a Full Stack Web Developer with 3 Years of experience, I enjoy building everything
          from small business to rich interactive web apps. If your business seeking a web presence
          or an employer looking to hire, you can get in touch with me here.
        </p>
        <p>
          I have a diverse set of skills, ranging from Design, to HTML+CSS+JavaScript, React Js,
          Redux, all the way to Node Js, Express Js, Server Deployments and Administration.
        </p>
      </Section>
      <Avatar variants={Avatar_ME} initial='initial' animate='animate'>
        <img src={me} alt='Jagadeesh_Avatar' />
      </Avatar>
      <AvatarHi variants={Avatar_Hi} initial='initial' animate='animate'>
        <img src={hi} alt='Hi_Avatar' />
      </AvatarHi>
    </Container>
  );
};

export default AboutMeComponent;
