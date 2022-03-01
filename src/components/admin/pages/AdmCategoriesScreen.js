import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { categoryDelete, categoryStartLoading, categoryStartSetActive } from '../../../actions/category';
import { uiEditOpenModal, uiNewOpenModal } from '../../../actions/ui';
import { NewCategory, EditCategory } from './modals';

export const AdmCategoriesScreen = () => {

  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch( uiNewOpenModal() );
  }

  useEffect(() => {
        
      dispatch( categoryStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS

    }, [dispatch]);


  const { category } = useSelector(state => state.category);

  const handleOver = (e) => {
    e.preventDefault();
    
  }


  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch( categoryStartSetActive({ catId: e.currentTarget.value }) );
    dispatch( uiEditOpenModal() );  
  };

  const handleDelete = async (e) =>{
    e.preventDefault();

    const catId = e.currentTarget.value;
    let confirm = false;

    await Swal.fire({
      title: '¿Estas seguro de borrar categoria?',
      text: "Esto no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar categoria!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm = true;
      }
    });
    
    if (confirm) {
      dispatch( categoryDelete(catId) );
    }
  };

  return (
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Categories Screen</h2>
          <hr />
        <button className='btn btn-secondary' onClick={ openModal }>Nueva Categoría</button>
        <hr />

        <div className="table-responsive">
            <table className='table table-hover align-middle'>
              <thead>
                <tr className='table-dark'>
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody className='table-secondary'>
              { category.map((e, index) => {

                    return (
                      <tr key={ index }>
                        <th scope="row">{ e.code }</th>
                        <td>{ e.name }</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                              <button onClick={ e => handleEdit(e) } className='btn btn-outline-dark' value={ e.catId } onMouseOver={ e => handleOver(e) }>
                                <i className="fs-5 bi bi-pencil-fill"></i>
                              </button>
                              <button onClick={ e => handleDelete(e) } className='btn btn-outline-dark' value={ e.catId }>
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
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Editar</th>
                </tr>
              </tfoot>
            </table>
          </div>
        
        <NewCategory />
        <EditCategory />
        </div>
    </div>
  )
}
