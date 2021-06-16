import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <PrivateRoute path='/home' exact component={Home} />
    </Switch>
  )
}

export default PrivateRoutes
