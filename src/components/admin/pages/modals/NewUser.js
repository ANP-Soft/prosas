import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiNewCloseModal } from '../../../../actions/ui';

import { useForm } from '../../../../hooks/useForm';
import './modal.css';



const initFormValue = {
    name: ''
};
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


export const NewUser = () => {

    const { newModalOpen } = useSelector(state => state.ui);
    const [formValues, handleFormValues] = useForm(initFormValue);
    const dispatch = useDispatch();
    const { name } = formValues;

    const closeModal = () => {
         dispatch( uiNewCloseModal() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);
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
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
                <div className='form-floating form-outline'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        id='floatingName'
                        placeholder='Nombre'
                    
                        name='name'
                        value={ name }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingName'>Email Usuario</label>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-secondary btn-block"
                >
                    <i className="far fa-save me-2"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>


    </>)
}
