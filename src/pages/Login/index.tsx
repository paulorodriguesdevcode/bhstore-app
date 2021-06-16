import React from 'react'
import { Form, Button } from 'react-bootstrap'

import InputLogin from '../../components/InputLogin'
import './styles.scss'

const Login: React.FC = () => {
  return (
    <div className='col-md-12'>
      <Form>
        <InputLogin id='input-email' type='text' name='email' />

        <InputLogin id='input-password' type='password' name='password' />

        <Button className='btn-purple col-md-12' type='submit' variant='custom'>
          Sign in
        </Button>
      </Form>
    </div>
  )
}
export default Login
