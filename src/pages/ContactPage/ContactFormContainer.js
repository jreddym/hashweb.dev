import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

const FromGroup = styled(motion.div)`
  margin-bottom: 1rem;
  width: 300px;
`;

const InputField = styled.input`
  font-family: inherit;
  font-size: 1.4rem;
  outline: none;
  background: transparent;
  border: 0;
  padding: 12px 20px;
  color: #ecf0f1;
  border-bottom: 2px solid #ecf0f1;
`;

const Button = styled(motion.button)`
margin-top:  1rem;
  color: #fff;
  background: #000;
  outline: 0;
  border: 0;
  padding 12px 20px;
  box-border: 0 0 2px rgba(0,0,0,0.4);
  cursor: pointer;
  text-decoration:none;

  &:hover,
  &:active{
    outline:0;
  }
`;

const buttonVariant = {
  hover: {
    background: '#000',
    boxShadow: '0 0 5px #fff',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const ContactFormContainer = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      console.log('ContactFormContainer -> values', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FromGroup>
        <InputField
          type='text'
          name='name'
          placeholder='Fill with your name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </FromGroup>
      <FromGroup>
        <InputField
          type='email'
          name='email'
          placeholder='Your email address'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FromGroup>
      <Button variants={buttonVariant} whileHover='hover'>
        Submit
      </Button>
    </form>
  );
};

export default ContactFormContainer;
