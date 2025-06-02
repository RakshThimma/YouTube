import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
// import Head from './Head'

const Body = () => {
  return (
    <div className='flex overflow-hidden'>
        <Sidebar/>
        <Outlet/>  
    </div>
  )
}

export default Body