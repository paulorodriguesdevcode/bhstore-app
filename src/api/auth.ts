import Cookies from 'js-cookie'

import { IUser } from '../models/'
import api from './api'

export const signin = async (user: IUser) => {
  const token = (await api.post('auth/login', user))?.data

  if (token) {
    Cookies.set('access_token', token.access_token)
  } else {
    console.log('Token not found')
  }
}

export const getUser = async () => {
  return (await api.get('auth/user'))?.data
}

export const logoff = async () => {
  const cookiesAuthentication = Cookies.get('access_token')
  if (cookiesAuthentication) {
    Cookies.remove('access_token')
  }
  return
}
