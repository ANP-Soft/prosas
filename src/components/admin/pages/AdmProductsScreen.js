import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';

import { uiEditOpenModal, uiNewOpenModal } from '../../../actions/ui';
import { categoryStartLoading } from '../../../actions/category';
import { productStartDelete, productStartLoading, productStartSetActive } from '../../../actions/product';
import { EditProduct, NewProduct } from './modals';
import '../style.css';

export const AdmProductsScreen = () => {

  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product);

  const openNewModal = (e) => {
    dispatch( uiNewOpenModal() );
  }

  useEffect(() => {
    
    dispatch( categoryStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS
    dispatch( productStartLoading() ); //PARA CARGAR TODOS LOS PRODUCTOS

  }, [dispatch]);

  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch( productStartSetActive({ pid: e.currentTarget.value }) );
    dispatch( uiEditOpenModal() );  
  };

  const handleDelete = async (e) =>{
    e.preventDefault();

    const pid = e.currentTarget.value;
    let confirm = false;

    await Swal.fire({
      title: '¿Estas seguro de borrar producto?',
      text: "Esto no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar producto!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm = true;
      }
    });

    if (confirm) {
      // console.log('Delete Product   -->', pid);
      dispatch( productStartDelete(pid) );
    }
  }

  // const handleViewImg = async (e) => {
  //   e.preventDefault();
  //   console.log('View IMG  -->', e.currentTarget.value);
  // }

  return (
    <>
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Products Screen</h2>
          <hr />
          <button className='btn btn-secondary' onClick={ openNewModal }>Nuevo Producto</button>
          <div className='h5 mx-5 d-inline '>Total: <div className='d-inline text-warning bg-dark'>{ product.length } productos</div></div>
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
                          <td>{ e.img &&
                              <div className="btn-group">
                                <button className='btn btn-outline-dark' /* onMouseOver={ e => handleViewImg(e) } */ data-tip data-for={'view-img-'+ e.img } /*value={ e.img }*/>
                                  <ReactTooltip id={'view-img-'+ e.img }>
                                    <img src={ e.img } alt="pid-img" className='rounded custom-img' />
                                  </ReactTooltip>
                                  <i className="fs-5 bi bi-card-image"></i>
                                </button>
                              </div>
                              }
                          </td>
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
          <EditProduct />
        </div>
    </div>

    
    </>
  )
}
