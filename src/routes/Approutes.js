import React from 'react'
import Home from '../Components/home/home'
import About from '../Components/about/about'
import Auth from '../Components/Auth/auth'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

function Approutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/auth' element={<Auth/>} />
        

    </Routes>
    </BrowserRouter>
  )
}

export default Approutes