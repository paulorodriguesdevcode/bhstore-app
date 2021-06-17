import React from 'react'
import { Form, Button } from 'react-bootstrap'

import InputLogin from '../../components/InputLogin'
import './styles.scss'

const Login: React.FC = () => {
  return (
    <div className='container-fluid page-all '>
      <div className='main-content'>
        <Form className='form-login col-md-12'>
          <div className='items-form'>
            <InputLogin
              id='input-email'
              type='text'
              name='email'
              placeholder='Email'
              className='col-md-12'
            />

            <InputLogin
              id='input-password'
              type='password'
              name='password'
              placeholder='Password'
              className='col-md-12'
            />

            <Button
              className='btn-light col-md-12'
              type='submit'
              variant='custom'
            >
              Sign in
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default Login
