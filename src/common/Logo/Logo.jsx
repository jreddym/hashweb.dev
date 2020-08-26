import React from 'react';
import logo from '../../assets/svg/web_dev_logo_tilt.svg';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt='HASH_WEB_LOGO' />
    </div>
  );
};

export default Logo;
