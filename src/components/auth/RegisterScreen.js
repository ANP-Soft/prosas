import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import moment from 'moment';

import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './style.css';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formRegisterValues, handleRegisterInputChange] = useForm({
      fName: '',
      fEmail: '',
      fPassword: '',
      fPassword2: '',
  });

  const { fName, fEmail, fPassword, fPassword2 } = formRegisterValues;
  
  const handleLogin = () => {
    navigate('/login', { replace: true });
  };


  const handleRegister = (e) => {
    e.preventDefault();

    if( fPassword !== fPassword2 )
        return Swal.fire('Error', 'Las contraseñas tienen que ser iguales', 'error');
    if( !validator.isEmail( fEmail ))
        return Swal.fire('Error', 'El correo es inválido', 'error')
    if( !validator.isLength( fName, { min:6, max: undefined }) )
        return Swal.fire('Error', 'El nombre debe ser de mas de 6 caracteres', 'error');
    
    const lastModified = moment().toDate();
    dispatch( startRegister(fEmail, fPassword, fName, lastModified) );
  };

  return (
      <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white' >
                <div className='card-body p-5 text-center'>

                  <div className='mb-md-5 mt-md-4 pb-5'>

                    <h2 className='fw-bold mb-2 text-uppercase'>Registro</h2>
                    <p className='text-white-50 mb-5'>Por favor ingresa tus datos</p>
                    <form onSubmit={ handleRegister }>
                    
                      <div className='form-floating form-outline mb-4'>
                          <input 
                              type='text'
                              className='form-control form-control-lg bg-dark text-white'
                              id='fName'
                              placeholder='Name Lastname'
                        
                              name='fName'
                              value={ fName }
                              onChange={ handleRegisterInputChange }
                          ></input>
                          <label htmlFor='fName'>Nombre</label>
                      </div>

                      <div className='form-floating form-outline mb-4'>
                          <input
                              type='email'
                              className='form-control form-control-lg bg-dark text-white'
                              id='fEmail'
                              placeholder='name@example.com'

                              name='fEmail'
                              value={ fEmail }
                              onChange={ handleRegisterInputChange }
                          ></input>
                          <label htmlFor='fEmail'>Email</label>
                      </div>

                      <div className='form-floating form-outline mb-4'>
                          <input 
                              type='password'
                              className='form-control form-control-lg bg-dark text-white'
                              id='fPassword1'
                              placeholder='Password'

                              name='fPassword'
                              value={ fPassword }
                              onChange={ handleRegisterInputChange }
                          ></input>
                          <label htmlFor='fPassword1'>Contraseña</label>
                      </div>
                                    
                      <div className='form-floating form-outline mb-4'>
                          <input
                              type='password'
                              className='form-control form-control-lg bg-dark text-white' 
                              id='fPassword2' 
                              placeholder='Password2'
                        
                              name='fPassword2'
                              value={ fPassword2 }
                              onChange={ handleRegisterInputChange }
                          ></input>
                          <label htmlFor='fPassword2'>Confirmar Contraseña</label>
                      </div>
                      <button className='btn btn-outline-light btn-lg px-5 mt-5' type='submit'>Registrarse</button>
                    
                    </form>

                  </div>

                  <div>
                    <p className='mb-0 d-inline'>¿Ya tienes una cuenta? </p><div onClick={ handleLogin } className='text-white-50 fw-bold text-decoration-underline pointer d-inline'>Ingresa</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
