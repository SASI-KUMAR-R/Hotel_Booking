import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Login from './Pages/Login'
import Provider from './Pages/Provider'
import HotelListing from './Pages/HotelListing'


import { AuthProvider } from './Pages/AuthContext'

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/provider' element={<Provider />} />
          <Route path='/hotellisting' element={<HotelListing />} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
