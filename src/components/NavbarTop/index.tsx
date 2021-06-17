import React from 'react'
import { Navbar } from 'react-bootstrap'
import { CgLogOff } from 'react-icons/cg'

import './styles.scss'

const NavbarTop: React.FC = () => {
  const logOff = () => {
    /// exclui jwt
    /// encaminha para login
    alert('logoff')
  }
  return (
    <>
      <Navbar bg='dark' variant='dark' className='nav-bar-top'>
        <Navbar.Brand href='/home'>BHStore - Useful Management</Navbar.Brand>
        <CgLogOff size={'25px'} onClick={logOff} />
      </Navbar>
    </>
  )
}

export default NavbarTop
