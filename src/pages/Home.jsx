import React from 'react'
import NavBar from '../components/Home/NavBar'

import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer'


const Home = () => {
  return (
    <div>
      <NavBar/>
     
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
