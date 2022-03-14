import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { categoryDelete, categoryStartLoading, categoryStartSetActive } from '../../../actions/category';
import { uiEditOpenModal, uiNewOpenModal } from '../../../actions/ui';
import { useForm } from '../../../hooks/useForm';
import { NewCategory, EditCategory } from './modals';


const initFormValue = {
  searchCode: '',
  searchName: '',
};

export const AdmCategoriesScreen = () => {

  const dispatch = useDispatch();
  const [formValues, handleFormValues, reset] = useForm(initFormValue);
  const { searchCode, searchName } = formValues;

  const openNewModal = (e) => {
    dispatch( uiNewOpenModal() );
  }

  useEffect(() => {
        
      dispatch( categoryStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS

    }, [dispatch]);


  const { category } = useSelector(state => state.category);

  // const handleOver = (e) => {
  //   e.preventDefault();
    
  // }

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

  const resetFilters = () => {
    reset();
    document.querySelector("#searchCategory").value='';
  };

  return (
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Categories Screen</h2>
          <hr />
        <button className='btn btn-secondary' onClick={ openNewModal }>Nueva Categoría</button>
        <div className='h5 mx-5 d-inline '>Total: <div className='d-inline text-warning bg-dark'>{ category.length } categorias</div></div>
        <div className='d-inline-block mx-2'>
          <input
            type="text"
            className='form-control form-control-sm'
            id='searchCode'
            name='searchCode'
            placeholder='Buscar por Código'
            value={ searchCode }
            onChange={ handleFormValues } 
          >
          </input>
        </div>
        <div className='d-inline-block mx-2'>
          <input
            type="text"
            className='form-control form-control-sm'
            id='searchName'
            name='searchName'
            placeholder='Buscar por Nombre'
            value={ searchName }
            onChange={ handleFormValues } 
          >
          </input>
        </div>

        <div className='d-inline-block mx-2'>
          <button className='btn btn-secondary' onClick={ resetFilters }>Borrar filtros</button>
        </div>
        <hr />

        <div className="table-responsive">
            <table className='table table-hover align-middle text-center'>
              <thead>
                <tr className='table-dark'>
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody className='table-secondary'>
              { category
                    .filter(e => String(e.code).includes(searchCode) && e.name.includes(searchName.toUpperCase()) )
                    // .filter(e => e.name.includes(searchName.toUpperCase()))
                    .map((e, index) => {

                    return (
                      <tr key={ index }>
                        <th scope="row">{ e.code }</th>
                        <td>{ e.name }</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                              <button onClick={ e => handleEdit(e) } className='btn btn-outline-dark' value={ e.catId } /*onMouseOver={ e => handleOver(e) }*/>
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
