import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Dashboard() {
  const [pendientes, setPendientes] = useState([]);
  const [completadas, setCompletadas] = useState([]);
  const contador = 1;

  useEffect (() =>{
    axios.get("http://localhost:8800/DashboardContador",{
      params: {
        contador: contador
      }
    })
    .then(res => {

      console.log(res.data);
      setCompletadas(res.data.completadas);
      setPendientes(res.data.pendientes);
    });
  }, []);

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-lg overflow-hidden border mx-4 mt-8">
      <h2 className='font-bold text-white'>Pendientes por Facturar</h2>
      <table className="w-full">
      <thead className="border">
        <tr>
          <th className="p-2 w-70 text-left">Cliente</th>
          <th className="p-2">Monto</th>
          <th className="p-2">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {pendientes.map((factura) => (
          <tr key={factura.id_invoices}>
            <td className="p-2 w-70 text-left">X</td>
            <td className="p-2">{factura.amount}</td>
            <th className="p-2">{factura.date}</th>
          </tr>
        ))}
      </tbody>
      </table>
    </div>

    <div className="rounded-lg overflow-hidden border  mx-4 mt-8">
      <h2 className='font-bold text-white'>Facturas Completadas</h2>
      <table className="w-full">
        <thead className="border">
          <tr>
            <th className="p-2 w-70 text-left">Cliente</th>
            <th className="p-2">Monto</th>
            <th className="p-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {completadas.map((factura) => (
          <tr key={factura.id_invoices}>
            <td className="p-2 w-70 text-left">X</td>
            <td className="p-2">{factura.amount}</td>
            <th className="p-2">{factura.date}</th>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
