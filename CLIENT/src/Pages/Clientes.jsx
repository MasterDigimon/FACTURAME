import React from 'react'

export default function Clientes() {
  return (
    
        <div className="rounded-lg overflow-hidden border mx-4 mt-8">
        <h2 className='font-bold text-white'>Mis Clientes</h2>
        <table className="w-full">
        <thead className="border">
            <tr>
            <th className="p-2 w-60% text-left ">Cliente</th>
            <th className="p-2 w-30%">E-MAIL</th>
            <th className="p-2">CFDI</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th className="p-2 w-60% text-left">Juan</th>
            <th className="p-2 w-30%">juan@example.com</th>
            <th className="p-2 text-center"><img src="./public/doc-icon.png" className='mx-auto w-8 h-8 object-cover bg-white opacity-70 rounded-full mt-2'></img></th>
           
            </tr>
        </tbody>
        </table>
        </div>
    
  )
}
