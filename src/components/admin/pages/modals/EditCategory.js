import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


import { uiEditCloseModal } from '../../../../actions/ui';
import './modal.css';
import Swal from 'sweetalert2';
import { categoryStartEdit } from '../../../../actions/category';

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
    name: ''
};


export const EditCategory = () => {
    
    const { editModalOpen } = useSelector(state => state.ui);
    const { active } = useSelector(state => state.category);

    

    const [formValues, setFormValues] = useState(initFormValue);
    const { name } = formValues;
    // const resetForm = () => {
    //     setFormValues(initFormValue);
    // }

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

        if(name.length < 3){
            return Swal.fire('Error', 'El campo debe ser mayor a 2 caracteres', 'error');
        }

        console.log(formValues);
        dispatch( categoryStartEdit(formValues) );
        
        closeModal();
    }

    return (<>
        {/* Edit Category */}
        <Modal
            isOpen={ editModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
        >
            <h1 className='text-center'>Editar categoría</h1>
            <hr />
            <p className='text-dark-50 mt-4 mb-5 text-center'>Por favor ingresa los datos requeridos</p>
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
                <div className='form-floating form-outline mb-4'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        id='floatingName'
                        placeholder='N'
                    
                        name='name'
                        value={ name }
                        onChange={ handleInputChange }
                    ></input>
                    <label htmlFor='floatingName'>Nombre Categoría</label>
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
