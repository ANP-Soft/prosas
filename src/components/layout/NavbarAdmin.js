import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavbarAdmin = () => {

const dispatch = useDispatch();
const { email } = useSelector(state => state.auth);

const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch( startLogout() );
    // dispatch(setNavigation({page: e.currentTarget.value}));
}

const handleClickHome = (e) => {
    e.preventDefault();
    console.log('Home Clicked');
    // dispatch(setNavigation({page: e.currentTarget.value}));
}

  return (
    <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <div 
            className='navbar-brand col-md-3 col-lg-2 me-0 px-3 pointer' 
            onClick={ handleClickHome }>
            Paqueteria Rosas
        </div>
        
        <button 
            className='navbar-toggler d-md-none collapsed' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#sidebarMenu' 
            aria-controls='sidebarMenu' 
            aria-expanded='false' 
            aria-label='Toggle navigation'
        >
            <span className='navbar-toggler-icon'></span>
        </button>

        <input className='form-control form-control-dark w-100' type='text' placeholder='Search' aria-label='Search' />
        <div className='navbar-nav'>
            <div className='nav-item text-nowrap'>
                <div className='nav-link px-3'>{ email }</div>
            </div>
        </div>
        <div className='navbar-nav'>
            <div className='nav-item text-nowrap'>
                <div className='nav-link px-3 pointer' onClick={ handleClickLogout }>Sign out</div>
            </div>
        </div>
    </header>
  )
}
