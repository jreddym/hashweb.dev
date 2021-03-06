import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import portfolio_1 from '../../assets/images/portfolio_1.png'
import portfolio_2 from '../../assets/images/portfolio_2.png'
import { Link } from 'react-router-dom'
import Arrows from '../../common/Arrows/Arrows'

const Container = styled(motion.section)`
  margin: 1.5rem auto 0 auto;
  text-align: center;
  overflow: hidden;
  padding-bottom: 1rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #fff;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
    h1 {
      margin-top: 0;
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  height: 250px;
  width: 450px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-left: 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  position: relative;

  .cardHover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }

  .tools {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      cursor: pointer;
      font-size: 1.5rem;
      color: #fff;
    }
  }

  img {
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: #bdc3c7;
      transition: color 0.2 ease;
    }

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`

const Footer = styled(motion.div)`
  color: #bdc3c7;
  line-height: 1.8;
  word-spacing: 1.2;
  letter-spacing: 1px;
  margin-top: 5rem;
  h5 {
    font-size: 1rem;
    margin-bottom: 0rem;
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: #bdc3c7;
      transition: color 0.2 ease;
    }

    &:hover {
      color: #fff;
    }
  }

  strong {
    cursor: pointer;
  }

  @media (max-width: 520px) {
    h5 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
`

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
}

const footerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const overlay = {
  initial: {
    opacity: 0,
    y: 0,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

const PortfolioComponent = () => {
  return (
    <Container variants={sectionVariant} initial='initial' animate='animate' exit='exit'>
      <motion.div>
        <h1>Portfolio</h1>
        <CardContainer>
          <Card>
            <motion.div
              variants={overlay}
              initial='initial'
              whileHover='hover'
              whileTap='hover'
              className='cardHover'>
              <a
                href='https://github.com/jreddym/hashweb.dev'
                target='_blank'
                rel='noopener noreferrer'>
                <div className='tools'>
                  <i className='fa fa-github' style={{ fontSize: '40px', color: '#fff' }}></i>
                </div>
              </a>
            </motion.div>
            <img src={portfolio_1} alt='portfolio_1' />
          </Card>
          <Card>
            <motion.div
              variants={overlay}
              initial='initial'
              whileHover='hover'
              whileTap='hover'
              className='cardHover'>
              <a
                href='https://karate-school-hashweb.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <div className='tools'>
                  <i className='fa fa-eye' style={{ fontSize: '40px', color: '#fff' }}></i>
                </div>
              </a>
            </motion.div>
            <img src={portfolio_2} alt='portfolio_2' />
          </Card>
        </CardContainer>
      </motion.div>
      <Link to='/about'>
        <Arrows direction='left' />
      </Link>
      <Link to='/contact'>
        <Arrows direction='right' />
      </Link>
      <Footer variants={footerVariant} initial='initial' animate='animate'>
        <h5>Let's talk</h5>
        <p>
          Wanna get in touch or talk about a project? <br />
          Feel free to contact me via email at{' '}
          <a href='mailto: jagadeesh@hashweb.dev'>
            <strong>jagadeesh@hashweb.dev</strong>
          </a>
        </p>
      </Footer>
    </Container>
  )
}

export default PortfolioComponent
