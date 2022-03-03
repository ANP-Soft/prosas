import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';


import { uiNewCloseModal } from '../../../../actions/ui';
import { useForm } from '../../../../hooks/useForm';
import { productStartAddNew } from '../../../../actions/product';
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
    category: '',
    price: 0,
    stock: 0,
    url: '',
    description: '',
};


export const NewProduct = () => {

    const { newModalOpen } = useSelector(state => state.ui);
    const { category : categories } = useSelector(state => state.category);
    const [formValues, handleFormValues, reset] = useForm(initFormValue);
    const dispatch = useDispatch();
    const { name, price, url, description, stock } = formValues;

    const closeModal = () => {
        reset();
        dispatch( uiNewCloseModal() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        formValues.lastModified = moment().toDate();
        formValues.dataFile = document.querySelector('#floatingUrl').files[0];

        //Validaciones
        if(name.length < 3) return Swal.fire('Error', 'Nombre debe ser mayor a 2 caracteres', 'error');
        if(formValues.category === '') return Swal.fire('Error', 'Favor seleccione categoria', 'error');
        if(price < 100) return Swal.fire('Error', 'Favor seleccione un precio válido', 'error');
        if(stock === 0) return Swal.fire('Error', 'Favor seleccione un stock válido', 'error');

        console.log(formValues);
        dispatch( productStartAddNew(formValues) );
        closeModal();
    }

    return (<>
        {/* New Product */}
        <Modal
            isOpen={ newModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
        >
            <h1 className='text-center'>Nuevo Producto</h1>
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
                        placeholder='N'
                    
                        name='name'
                        value={ name }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingName'>Nombre Producto</label>
                </div>

                <div className='form-floating form-outline mb-2'>
                    <select className="form-control" id="floatingCategory" onChange={ handleFormValues } name='category' >
                    <option  defaultValue=''>Seleccione Categoria...</option>
                    { categories.map((e, index) => {
                            return (
                                <option key={ index } value={ e.catId }>{ e.name }</option>
                            );
                        })
                    }
                    </select>

                    <label htmlFor='floatingCategory'>Categoria</label>
                </div>
                
                <div className='form-floating form-outline mb-2'>
                    <input
                        type='number'
                        className='form-control form-control-lg'
                        id='floatingStock'
                        placeholder='N'
                    
                        name='stock'
                        value={ stock }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingStock'>Stock</label>
                </div>

                <div className='form-floating form-outline mb-2'>
                    <input
                        type='number'
                        className='form-control form-control-lg'
                        id='floatingPrice'
                        placeholder='N'
                    
                        name='price'
                        value={ price }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingPrice'>Precio</label>
                </div>

                <div className='form-floating form-outline mb-2'>
                    <textarea
                        type='text'
                        className='form-control form-control-lg'
                        id='floatingDescription'
                        placeholder='N'
                    
                        name='description'
                        value={ description }
                        onChange={ handleFormValues }
                    ></textarea>
                    <label htmlFor='floatingDescription'>Descripcion</label>
                </div>

                <div className='form-floating form-outline mb-2'>
                    <input
                        type='file'
                        className='form-control form-control-sm'
                        id='floatingUrl'
                        placeholder='N'
                    
                        name='url'
                        value={ url }
                        onChange={ handleFormValues }
                    ></input>
                    <label htmlFor='floatingUrl'>Foto</label>
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
