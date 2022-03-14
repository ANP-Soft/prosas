import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import { uiViewCloseModal } from '../../../../actions/ui';
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
    stock: 0,
    price: 0,
    img: '',
    description: '',
};



export const ViewProduct = () => {

    const { viewModalOpen } = useSelector(state => state.ui);
    const { category : categories } = useSelector(state => state.category);
    const { active } = useSelector(state => state.product);
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(initFormValue);
    const { name, stock, price, description, img } = formValues;

    useEffect(() => {
        if(active) {
            setFormValues(active);
        }
    }, [active]);





    const closeModal = (e) => {
        dispatch( uiViewCloseModal() );
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        dispatch( uiViewCloseModal() );
    }


  return (<>
    <Modal
            isOpen={ viewModalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }   
    >
        <h1 className='text-center'>Ver Producto</h1>
        <hr />
        <form 
            className="container mt-4 mb-5"
        >
            <div className='form-floating form-outline mb-2'>
              <input
                  type='text'
                  className='form-control form-control-lg'
                  id='floatingName'
                  placeholder='N'
              
                  name='name'
                  value={ name }
                  disabled
              ></input>
              <label htmlFor='floatingName'>Nombre Producto</label>
            </div>

            <div className='form-floating form-outline mb-2'>
                <select className="form-control" id="floatingCategory" value={ ( active ) ? active.category._id : null } name='category' disabled >
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
                    disabled
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
                  disabled
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
                  disabled
              ></textarea>
              <label htmlFor='floatingDescription'>Descripcion</label>
            </div>

            {   !(img === '') &&

                <div className='text-center my-4'>
                    <button className='btn btn-outline-dark' data-tip data-for={'view-img-'+ img } >
                        <ReactTooltip id={'view-img-'+ img }>
                            <img src={ img } alt="pid-img" className='rounded custom-img' />
                        </ReactTooltip>
                        <i className="fs-5 bi bi-card-image"></i>
                    </button>
                </div>
                
            }

            <div className='text-center'>
                <button
                    onClick={ handleCloseModal }
                    className="btn btn-outline-secondary"
                >
                    <i class="fa-solid fa-xmark me-2"></i>
                    <span> Cerrar</span>
                </button>
            </div>   

        </form>
    
    </Modal>
    </>)
}
