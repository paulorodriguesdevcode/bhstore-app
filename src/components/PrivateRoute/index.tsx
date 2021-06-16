import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const usuarioLogado = true
  return usuarioLogado ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to='/' />} />
  )
}

export default PrivateRoute
