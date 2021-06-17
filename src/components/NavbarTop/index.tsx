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
        <CgLogOff size={'50px'} onClick={logOff} title={'Click to logoff'} />
      </Navbar>
    </>
  )
}

export default NavbarTop
