import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';

import { uiEditCloseModal } from '../../../../actions/ui';
import { productStartEdit } from '../../../../actions/product';
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

export const EditProduct = () => {
  
  const { editModalOpen } = useSelector(state => state.ui);
  const { category : categories } = useSelector(state => state.category);
  const { active } = useSelector(state => state.product);

  const [formValues, setFormValues] = useState(initFormValue);
  const { name, price, description, stock } = formValues;

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
    formValues.dataFile = document.querySelector('#floatingUrl').files[0] || null;

    //Validaciones
    if(name.length < 3) return Swal.fire('Error', 'Nombre debe ser mayor a 2 caracteres', 'error');
    if(formValues.category === '') return Swal.fire('Error', 'Favor seleccione categoria', 'error');
    if(price < 100) return Swal.fire('Error', 'Favor seleccione un precio válido', 'error');
    if(stock === 0) return Swal.fire('Error', 'Favor seleccione un stock válido', 'error');



    console.log(formValues);
    // formValues.category = formValues.category._id;
    dispatch( productStartEdit(formValues) );

    closeModal();
}
  
  
  
  
  
  
  
  return (<>
      <Modal
            isOpen={ editModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
        >
          <h1 className='text-center'>Editar Producto</h1>
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
                  onChange={ handleInputChange }
              ></input>
              <label htmlFor='floatingName'>Nombre Producto</label>
            </div>

            <div className='form-floating form-outline mb-2'>
                {
                  // SOLUCIONAR ERROR DE TIPOS DE DATOS, CATEGORY Y ACTIVE CATEGORY, A VECES SE GUARDA COMO STRING Y OTRAS COMO REFERENCIA
                  // SE EDITA UN ELEMENTO, SE VUELVA A EDITAR Y SE CAE, POR QUE NO PUEDE ACCEDER A active.category._id
                  // EL ERROR ESTA CUANDO SE AÑADE A LOS PRODUCTOS EN REDUX, (ARREGLO DE PRODUCTOS, LLEGA COMO STR (category) Y NO COMO OBJECTO (category._id)
                }
                <select className="form-control" id="floatingCategory" value={ ( active ) ? active.category._id : null } onChange={ handleInputChange } name='category' >
                  <option>Seleccione Categoria...</option>
                  { categories.map((e, index) => {
                          return ( <option key={ index } value={ e.catId }>{ e.name }</option> );
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
                    onChange={ handleInputChange }
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
                  onChange={ handleInputChange }
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
                  onChange={ handleInputChange }
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
