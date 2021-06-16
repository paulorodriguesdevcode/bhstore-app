import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import './App.css'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  )
}

export default App
