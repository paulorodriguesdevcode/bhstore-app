import React from 'react'
import { Navbar } from 'react-bootstrap'
import { CgLogOff } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import './styles.scss'

const NavbarTop: React.FC = () => {
  const history = useHistory()
  const logOff = () => {
    /// exclui jwt
    /// encaminha para login
    history.push('/')
    alert('logoff')
  }
  return (
    <>
      <Navbar variant='dark' className=' navbar  nav-bar-top'>
        <Navbar.Brand href='/home'>BHStore - Useful Management</Navbar.Brand>
        <CgLogOff size={'25px'} onClick={logOff} />
      </Navbar>
    </>
  )
}

export default NavbarTop
