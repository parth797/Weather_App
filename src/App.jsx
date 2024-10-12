import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './signUp'
import HomePage from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        
      <Route path='/' element={<Login />}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/HomePage' element={<HomePage/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
