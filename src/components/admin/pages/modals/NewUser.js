import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import validator from 'validator';


import { uiNewCloseModal } from '../../../../actions/ui';
import { useForm } from '../../../../hooks/useForm';
import './modal.css';
import Swal from 'sweetalert2';
import { userStartAddNew } from '../../../../actions/user';


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
    password: '',
    password2: '',
};

export const NewUser = () => {

    const { newModalOpen } = useSelector(state => state.ui);
    const [formValues, handleFormValues, reset] = useForm(initFormValue);
    const dispatch = useDispatch();
    const { name, email, password, password2 } = formValues;

    const closeModal = () => {
        reset(); 
        dispatch( uiNewCloseModal() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        formValues.lastModified = moment().toDate();
        
        if( !validator.isLength( name, { min:6, max: undefined }) ) return Swal.fire('Error', 'El nombre debe ser mayor a 6 caracteres', 'error');
        if( !validator.isLength( email, { min:6, max: undefined }) ) return Swal.fire('Error', 'El correo debe ser mayor a 6 caracteres', 'error');
        if( !validator.isEmail( email )) return Swal.fire('Error', 'El correo es inválido', 'error');
        if( !validator.isLength( password, { min:6, max: undefined }) ) return Swal.fire('Error', 'La contraseña debe ser mayor a 6 caracteres', 'error');
        if(password !== password2) return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        
        delete formValues.password2;

        dispatch( userStartAddNew(formValues) );

        closeModal();
    }

    return (<>
        {/* New User */}
        <Modal
            isOpen={ newModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
        >
            <h1 className='text-center'>Nuevo Usuario</h1>
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
                        onChange={ handleFormValues }
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
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingEmail'>Email Usuario</label>
                </div>

                <div className='form-floating form-outline mb-2'>
                    <input
                        type='password'
                        className='form-control form-control-lg'
                        id='floatingPassword'
                        placeholder='P'
                    
                        name='password'
                        value={ password }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingPassword'>Contraseña</label>
                </div>

                <div className='form-floating form-outline mb-4'>
                    <input
                        type='password'
                        className='form-control form-control-lg'
                        id='floatingPassword2'
                        placeholder='P2'
                    
                        name='password2'
                        value={ password2 }
                        onChange={ handleFormValues }
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


    </>)
}
