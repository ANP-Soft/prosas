import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleAdmin = () => {
        navigate('/admin', { replace: true });
    }

    return (
    
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container'>
            <a href='/' className='navbar-brand'>
                <i className='bi bi-pencil-fill align-middle mx-2'></i>
                <span className='align-middle'>Paqueteria Rosas</span>
            </a>
            <button 
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#idContenidoNavbar'
                aria-controls='idContenidoNavbar'
                aria-expanded='false'
                aria-label='Toggle Navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='idContenidoNavbar'>
                <ul className='navbar-nav mb-2 mb-lg-0 ms-auto'>
                    <li className='nav-item'>
                        <a 
                            href='#inicio'
                            className='nav-link'
                            aria-current='page'
                        >Inicio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            href='#servicios'
                            className='nav-link'
                        >Servicios
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            href='#comentarios'
                            className='nav-link'
                        >Comentarios
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            href='#suscribete'
                            className='nav-link'
                        >Suscríbete
                        </a>
                    </li>
                    <li className='nav-item'>
                        <div 
                            className='nav-link pointer'
                            onClick={ handleAdmin }
                        >
                        Admin Zone
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
  )
}
