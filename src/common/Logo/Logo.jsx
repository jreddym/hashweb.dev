import React from 'react';
import logo from '../../assets/svg/web_dev_logo_tilt.svg';
import classes from './Logo.module.css';
import { motion } from 'framer-motion';

const logoSvg = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <div className={classes.logo}>
      <motion.img
        src={logo}
        alt='HASH_WEB_LOGO'
        variant={logoSvg}
        initial='initial'
        animate='animate'
      />
    </div>
  );
};

export default Logo;
