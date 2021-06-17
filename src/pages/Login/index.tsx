import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import InputLogin from '../../components/InputLogin'
import './styles.scss'

const Login: React.FC = () => {
  const history = useHistory()

  const handleOnSubmit = () => {
    console.log('validar usuario')
    history.replace('/home')
  }

  return (
    <div className='container-fluid page-all '>
      <div className='main-content'>
        <Form className='col-md-12' onSubmit={handleOnSubmit}>
          <InputLogin
            id='input-email'
            type='text'
            name='email'
            placeholder='Email'
            className='col-md-12 input-login'
          />

          <InputLogin
            id='input-password'
            type='password'
            name='password'
            placeholder='Password'
            className='col-md-12 input-login'
          />

          <Button
            className='btn col-md-12 btn-sign-in'
            type='submit'
            variant='custom'
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default Login
