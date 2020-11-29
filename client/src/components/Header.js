import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <LinkContainer to='/dashboard'>
          <Navbar.Brand>
            <img className='header-logo' src='/logo256.png' alt='' />
            Haizi Bank
          </Navbar.Brand>
        </LinkContainer>
        <Nav className='ml-auto'>
          <LinkContainer to='/register' exact>
            <Nav.Link>
              <i className='glyphicon glyphicon-edit'></i> Register
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login' exact>
            <Nav.Link>
              <i className='glyphicon glyphicon-user'></i> Login
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
