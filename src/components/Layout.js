import React from 'react'
import { Navbar_Cliente } from './Navbar_Cliente'

export const Layout_Cliente = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Cliente />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}
