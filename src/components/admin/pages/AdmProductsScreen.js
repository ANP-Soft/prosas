import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productStartLoading } from '../../../actions/product';

import { uiNewOpenModal } from '../../../actions/ui';
import { NewProduct } from './modals';

export const AdmProductsScreen = () => {

  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product);

  const openNewModal = (e) => {
    dispatch( uiNewOpenModal() );
  }

  useEffect(() => {
        
    dispatch( productStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS

  }, [dispatch]);

  const handleEdit = (e) =>{
    e.preventDefault();
    console.log('Edit Product     -->', e.currentTarget.value);
    // dispatch( productStartSetActive({ pid: e.currentTarget.value }) );
    // dispatch( uiEditOpenModal() );  
  };

  const handleDelete = async (e) =>{
    e.preventDefault();
    console.log('Delete Product   -->', e.currentTarget.value);
  }

  return (
    <>
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Products Screen</h2>
          <hr />
          <button className='btn btn-secondary' onClick={ openNewModal }>Nuevo Producto</button>
          <hr/>

          <div className="table-responsive">
            <table className='table table-hover align-middle'>
              <thead>
                <tr className='table-dark'>
                  <th scope="col">SKU</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody className='table-secondary'>
              { product.map((e, index) => {
                  
                      return ( 
                        <tr key={ index }>
                          <th scope="row">{ e.sku }</th>
                          <td>{ e.name }</td>
                          <td>{ e.stock }</td>
                          <td>{ e.price }</td>
                          <td>{ e.img }</td>
                          <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                              <button onClick={ e => handleEdit(e) } className='btn btn-outline-dark' value={ e.pid }>
                                <i className="fs-5 bi bi-pencil-fill"></i>
                              </button>
                              <button onClick={ e => handleDelete(e) } className='btn btn-outline-dark' value={ e.pid }>
                                <i className="fs-5 bi bi-trash3-fill"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                  })
              }
              </tbody>
              <tfoot>
                <tr className='table-dark'>
                <th scope="col">SKU</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Editar</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <NewProduct />
        </div>
    </div>

    
    </>
  )
}
