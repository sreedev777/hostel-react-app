import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import Home from './components/home'
import NavigationBar from './components/NavigationBar'
import ViewStudent from './components/ViewStudent'
import AddLogout from './components/AddLogout'
import ViewLogout from './components/ViewLogout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/addlogout' element={<AddLogout />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/viewstudent' element={<ViewStudent />} />
          <Route path='/viewlogout' element={<ViewLogout />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
