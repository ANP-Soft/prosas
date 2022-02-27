import React from 'react'
import { useDispatch } from 'react-redux';

import { uiOpenModal } from '../../../actions/ui';
import { NewProduct } from './modals';

export const AdmProductsScreen = () => {

  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch( uiOpenModal() );
  }


  return (
    <>
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Products Screen</h2>
          <hr />
          <button className='btn btn-secondary' onClick={ openModal }>Nuevo Producto</button>
          <NewProduct />
        </div>
    </div>

    
    </>
  )
}
