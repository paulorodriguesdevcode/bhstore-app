import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { signin } from '../../api'
import InputLogin from '../../components/InputLogin'
import { IUser } from '../../models'

import './styles.scss'

const Login: React.FC = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm()

  const onSubmit = (data: IUser) => {
    console.log('Bateu no submit', data)
    login(data)
  }

  const login = async (data: IUser) => {
    try {
      await signin(data)
      history.replace('/home')
    } catch (err) {
      alert('Login failed')
      console.log(err)
    }
  }

  return (
    <div className='container-fluid page-all '>
      <div className='main-content'>
        <Form className='col-md-12' onSubmit={handleSubmit(onSubmit)}>
          <InputLogin
            id='input-username'
            type='text'
            name='username'
            placeholder='username'
            className='col-md-12 input-login'
            {...register('username')}
          />

          <InputLogin
            id='input-password'
            type='password'
            name='password'
            placeholder='Password'
            className='col-md-12 input-login'
            {...register('password')}
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
