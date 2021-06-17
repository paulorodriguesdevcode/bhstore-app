import React from 'react'

import './styles.scss'
import MainHome from '../../components/MainHome'
import NavbarTop from '../../components/NavbarTop'

const Home: React.FC = () => (
  <>
    <NavbarTop />
    <div className='container main'>
      <MainHome />
    </div>
  </>
)
export default Home
