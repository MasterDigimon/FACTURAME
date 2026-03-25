import React from 'react'
import { Link } from 'react-router-dom'

function Navegation() {
  return (

    
    <header className='bg-purple-950 p-2 text-white'>
      <nav className='flex flex-col md:flex-row justify-around'>
        <h1 className="flex text-l font-bold mb-4 md:mb-0">FACTURAME</h1>
        <ul className='flex md:flex-row space-y-4 md:space-y-8 md:space-x-4'>
          <li>
            <Link to="/"><div className='mx-4 mt-6'>Dashboard</div></Link>
          </li>
          <li>
            <Link to="/Facturas"><div className='mx-4 mt-6'>Facturas</div></Link>
          </li>
        </ul>

        <Link className='flex' to="">
        <img src="./public/profile-img.png" className='w-16 h-16 object-cover bg-white opacity-70 rounded-full mt-2'></img>
        </Link>

      </nav>
    </header>
  )
}

export default Navegation