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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      <AddStudent/>
      <ViewStudent/>
      <AddLogout/>
    </>
  )
}

export default App
