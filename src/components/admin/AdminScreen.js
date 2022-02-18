import React from 'react'
import { NavbarAdmin } from '../layout/NavbarAdmin';
import { Sidebar } from '../layout/Sidebar';
import './style.css';

export const AdminScreen = () => {
  return (
    <>
      <NavbarAdmin />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
