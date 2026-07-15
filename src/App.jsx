import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import './App.css'

import Home from './components/home'
import AddStudent from './components/AddStudent'
import AddLeave from './components/AddLeave'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-leave" element={<AddLeave />} />
      </Routes>
    </>
  )
}

export default App
