import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import validator from 'validator';


import { uiEditCloseModal } from '../../../../actions/ui';
import { userStartEdit } from '../../../../actions/user';
import './modal.css';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
const initFormValue = {
  name: '',
  email: '',
  role: '',
  password: '',
  password2: '',
};

export const EditUser = () => {

  const { editModalOpen } = useSelector(state => state.ui);
  const { active } = useSelector(state => state.user);

  const [formValues, setFormValues] = useState(initFormValue);
  const { name, email, role, password, password2 } = formValues;

  useEffect(() => {
    if(active) {
        setFormValues(active);
    }
  }, [active]);

  const handleInputChange = (e) => {
    if(typeof (e.target) !== "undefined"){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }
  }

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch( uiEditCloseModal() );
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    formValues.lastModified = moment().toDate();

    if( !validator.isLength( name, { min:6, max: undefined }) ) return Swal.fire('Error', 'El nombre debe ser mayor a 6 caracteres', 'error');
    if( !validator.isEmail( email )) return Swal.fire('Error', 'El correo es inválido', 'error');
    if( !validator.isLength( email, { min:6, max: undefined }) ) return Swal.fire('Error', 'El correo debe ser mayor a 6 caracteres', 'error');
    
    //SI CONTIENE PASSWORD O PASSWORD2
    if(!!( password || password2 )){
      if( !validator.isLength( password, { min:6, max: undefined }) ) return Swal.fire('Error', 'La contraseña debe ser mayor a 6 caracteres', 'error');
      if( password !== password2 ) return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }

    if (password === '') delete formValues.password;
    // delete formValues.facebook, formValues.google, formValues.password2, formValues.status;
    const { facebook, google, password2: passConfirm, status, ...rest } = formValues;

    dispatch( userStartEdit(rest) );
    
    closeModal();
}

  return (
  <Modal
            isOpen={ editModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
    >
    <h1 className='text-center'>Editar Usuario</h1>
    <hr />
    <p className='text-dark-50 mt-4 mb-5 text-center'>Por favor ingresa los datos requeridos</p>
    <form 
        className="container"
        onSubmit={ handleSubmitForm }
    >
      <div className='form-floating form-outline mb-2'>
        <input
            type='text'
            className='form-control form-control-lg'
            id='floatingName'
            placeholder='Nombre'
        
            name='name'
            value={ name }
            onChange={ handleInputChange }
        ></input>
        <label htmlFor='floatingName'>Nombre Usuario</label>
      </div>

      <div className='form-floating form-outline mb-2'>
        <input
            type='text'
            className='form-control form-control-lg'
            id='floatingEmail'
            placeholder='Email'
        
            name='email'
            value={ email }
            onChange={ handleInputChange }
        ></input>
        <label htmlFor='floatingEmail'>Email Usuario</label>
      </div>

      <div className='form-floating form-outline mb-2'>
        <select className="form-control" id="floatingRole" value={ role } onChange={ handleInputChange } name='role' >
          <option>Seleccione Rol...</option>
          <option key={ 1 } value={ 'USER_ROLE' }>Usuario</option>
          <option key={ 2 } value={ 'ADMIN_ROLE' }>Administrador</option>
        </select>
        <label htmlFor='floatingRole'>Rol</label>
      </div>

      <div className='form-floating form-outline mb-2'>
        <input
            type='password'
            className='form-control form-control-lg'
            id='floatingPassword'
            placeholder='P'
        
            name='password'
            value={ password }
            onChange={ handleInputChange }
        ></input>
        <label htmlFor='floatingPassword'>Nueva Contraseña</label>
      </div>

      <div className='form-floating form-outline mb-4'>
        <input
            type='password'
            className='form-control form-control-lg'
            id='floatingPassword2'
            placeholder='P2'
        
            name='password2'
            value={ password2 }
            onChange={ handleInputChange }
        ></input>
        <label htmlFor='floatingPassword2'>Confirmar Contraseña</label>
      </div>

      <div className='text-center'>
        <button
        type="submit"
        className="btn btn-outline-secondary"
        >
            <i className="far fa-save me-2"></i>
            <span> Guardar</span>
        </button>
      </div>

    </form>
  </Modal>
  )
}
