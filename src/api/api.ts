import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
})

api.interceptors.request.use(async (config) => {
  const cookiesAuthentication = Cookies.get('access_token')
  if (cookiesAuthentication) {
    config.headers.Authorization = `Bearer ${cookiesAuthentication}`
  }
  return config
})

export default api
