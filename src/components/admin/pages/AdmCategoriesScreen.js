import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';
import { NewCategory } from './modals';

export const AdmCategoriesScreen = () => {

  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch( uiOpenModal() );
  }

  return (
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Categories Screen</h2>
          <hr />
        <button className='btn btn-secondary' onClick={ openModal }>Nueva Categoría</button>
        <NewCategory />
        </div>
    </div>
  )
}
