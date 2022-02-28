import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryDelete, categoryStartLoading } from '../../../actions/category';
import { uiOpenModal } from '../../../actions/ui';
import { NewCategory } from './modals';

export const AdmCategoriesScreen = () => {

  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch( uiOpenModal() );
  }

  useEffect(() => {
        
      dispatch( categoryStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS

    }, [dispatch]);


  const { category } = useSelector(state => state.category);

  const handleEdit = (e) =>{
    e.preventDefault();
    console.log('Editar category: ', {catId: e.currentTarget.value});

    
  };

  const handleDelete = (e) =>{
    e.preventDefault();

    dispatch( categoryDelete(e.currentTarget.value) );
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
                              <button onClick={ e => handleEdit(e) } className='btn btn-outline-dark' value={ e.catId }>
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
        </div>
    </div>
  )
}
