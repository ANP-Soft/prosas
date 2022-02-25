import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import validator from 'validator';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './style.css';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
      fEmail: '',
      fPassword: ''
  });

  const { fEmail, fPassword } = formLoginValues;
  const handleLogin = (e) => {
    e.preventDefault();
    if( !validator.isEmail( fEmail ))
        return Swal.fire('Error', 'El correo es inválido', 'error')
    
    dispatch( startLogin( fEmail, fPassword ) );
    
  };

  return (
      <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white' >
                <div className='card-body p-5 text-center'>

                  <div className='mb-md-5 mt-md-4 pb-5'>

                    <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                    <p className='text-white-50 mb-5'>Por favor ingresa tu usuario y contraseña</p>
                    
                    <form onSubmit={handleLogin}>  
                      <div className='form-floating form-outline mb-4'>
                        <input
                          type='email'
                          className='form-control form-control-lg bg-dark text-white'
                          id='floatingEmail'
                          placeholder='name@example.com'
                        
                          name='fEmail'
                          value={ fEmail }
                          onChange={ handleLoginInputChange }
                        ></input>
                        <label htmlFor='floatingEmail'>Email</label>
                      </div>

                      <div className='form-floating form-outline mb-4'>
                        <input
                          type='password'
                          className='form-control form-control-lg bg-dark text-white'
                          id='floatingPassword'
                          placeholder='Password'

                          name='fPassword'
                          value={ fPassword }
                          onChange={ handleLoginInputChange }
                        ></input>
                        <label htmlFor='floatingPassword'>Contraseña</label>
                      </div>
                      <p className='small mb-5 pb-lg-2'><a className='text-white-50' href='#!'>¿Olvidaste tu contraseña?</a></p>
                      <button className='btn btn-outline-light btn-lg px-5' type='submit'>Ingresar</button>
                    </form>

                    <div className='d-flex justify-content-center text-center mt-4 pt-1'>
                      <a href='#!' className='text-white mx-4'><i className='fab fa-facebook-f fa-lg'></i></a>
                      <a href='#!' className='text-white mx-4'><i className='fab fa-google fa-lg'></i></a>
                    </div>

                  </div>

                  <div>
                    <p className='mb-0'>¿No tienes una cuenta? <a href='#!' className='text-white-50 fw-bold'>Registrate</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
