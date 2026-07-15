import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import Home from './components/home'
import NavigationBar from './components/NavigationBar'
import LoginAdd from './components/LoginAdd'
import LogView from './components/LogView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewLogout from './components/ViewLogout'
import ViewStudent from './components/ViewStudent'
import AddLogout from './components/AddLogout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/viewlogout' element={<ViewLogout/>}/>
      <Route path='/viewstudent' element={<ViewStudent/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
      <Route path='/addlogout' element={<AddLogout/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
