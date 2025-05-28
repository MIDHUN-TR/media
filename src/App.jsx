import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import './bootstrap.min.css'
import Reg from './pages/Reg'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Header from './hello/Header'
import Footer from './hello/Footer'




function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/log' element={<Login />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/his' element={<History />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
