import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Login from './Pages/Login'
import Provider from './Pages/Provider'
import HotelListing from './Pages/HotelListing'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/provider' element={<Provider/>}/>
      <Route path='/hotellisting' element={<HotelListing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App