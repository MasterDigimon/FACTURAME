import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Navegation from './Components/Navegation'
import Facturas from './Pages/Facturas'
import Clientes from './Pages/Clientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navegation />
      <Routes>
      <Route path='/' element={ <Dashboard/>}/>
      <Route path='/Facturas' element={<Facturas/>}/>
      <Route path='/Clientes' element={<Clientes/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
