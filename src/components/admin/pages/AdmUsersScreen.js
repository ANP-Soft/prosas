import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { userStartDisable, userStartEnable, userStartLoading, userStartSetActive } from '../../../actions/user';
import { uiEditOpenModal, uiNewOpenModal } from '../../../actions/ui';
import { useForm } from '../../../hooks/useForm';
import { EditUser, NewUser } from './modals';


const initFormValue = {
  searchEmail: '',
  searchName: '',
  searchRole: '',
  searchOrigin: '',
  searchStatus: '',
};


export const AdmUsersScreen = () => {

  const dispatch = useDispatch();
  const [formValues, handleFormValues, reset] = useForm(initFormValue);
  const { searchEmail, searchName, searchRole, searchOrigin, searchStatus } = formValues;

  const openNewModal = (e) => {
    dispatch( uiNewOpenModal() );
  }

  useEffect(() => {
        
    dispatch( userStartLoading() ); //PARA CARGAR TODOS LAS CATEGORIAS

  }, [dispatch]);
  
  const { user } = useSelector(state => state.user);

  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch( userStartSetActive({ uid: e.currentTarget.value }) );
    dispatch( uiEditOpenModal() ); 
  };

  const handleDisable = async (e) =>{
    e.preventDefault();

    const uid = e.currentTarget.value;
    let confirm = false;

    await Swal.fire({
      title: `¿Estas seguro de deshabilitar usuario?`,
      text: 'Esto provocara que no pueda acceder al sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, deshabilitar usuario!`,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm = true;
      }
    });

    if (confirm) {
      dispatch( userStartSetActive({ uid }) );
      dispatch( userStartDisable(uid) );
    }
  };

  const handleEnable = async (e) => {
    e.preventDefault();
    
    const uid = e.currentTarget.value;
    let confirm = false;

    await Swal.fire({
      title: `¿Estas seguro de habilitar usuario?`,
      text: 'Esto provocara que pueda acceder al sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, habilitar usuario!`,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm = true;
      }
    });

    if (confirm) {
      dispatch( userStartSetActive({ uid }) );
      dispatch( userStartEnable(uid) );
    }
  };

  const resetFilters = () => {
    reset();
    document.querySelector("#searchRole").value='';
    document.querySelector("#searchOrigin").value='';
    document.querySelector("#searchStatus").value='';
  }


  return (
    <div className='col-md-9 col-lg-10 mt-3'>
        <div className='container-fluid'>  
          <h2 className='display-5 text-center'>Data Users Screen</h2>
          <hr />
          <button className='btn btn-secondary' onClick={ openNewModal }>Nuevo Usuario</button>
          <div className='h5 mx-5 d-inline '>Total: <div className='d-inline text-warning bg-dark'>{ user.length } usuarios</div></div>
          
          <div className='d-inline-block mx-2'>
            <input
              type="text"
              className='form-control form-control-sm'
              id='searchEmail'
              name='searchEmail'
              placeholder='Buscar por Email'
              value={ searchEmail }
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
            <select className="form-control form-control-sm text-secondary" id="searchRole" onChange={ handleFormValues } name='searchRole' >
              <option value=''>Buscar por Rol...</option>
              <option className='text-dark' key='1' value='ADMIN_ROLE'>Administrador</option>
              <option className='text-dark' key='2' value='USER_ROLE'>Usuario</option>
            </select>
          </div>

          <div className='d-inline-block mx-2'>
            <select className="form-control form-control-sm text-secondary" id="searchOrigin" onChange={ handleFormValues } name='searchOrigin' >
              <option value=''>Buscar por Origen...</option>
              <option className='text-dark' key='1' value='Portal'>Portal Web</option>
              <option className='text-dark' key='2' value='Facebook'>Facebook</option>
              <option className='text-dark' key='3' value='Google'>Google</option>
            </select>
          </div>

          <div className='d-inline-block mx-2'>
            <select className="form-control form-control-sm text-secondary" id="searchStatus" onChange={ handleFormValues } name='searchStatus' >
              <option value=''>Buscar por Estado...</option>
              <option className='text-dark' key='1' value='Activo'>Activo</option>
              <option className='text-dark' key='2' value='Inactivo'>Inactivo</option>
            </select>
          </div>

          <div className='d-inline-block mx-2'>
            <button className='btn btn-secondary' onClick={ resetFilters }>Borrar filtros</button>
          </div>

          <hr />

          <div className="table-responsive">
          <table className='table table-hover align-middle'>
              <thead className='text-center'>
                <tr className='table-dark'>
                  <th scope="col">Email</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Origen</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody className='table-secondary text-center'>
              {  
                user       
                  .filter(e => e.email.toUpperCase().includes(searchEmail.toUpperCase()) 
                              && e.name.toUpperCase().includes(searchName.toUpperCase())
                              && e.role.includes(searchRole)
                              && (
                                  (searchStatus === 'Activo') ? e.status === true
                                  : (searchStatus === 'Inactivo') ? e.status === false
                                    : true
                                )   
                              && (
                                  (searchOrigin === 'Facebook') ? (e.facebook === true && e.google === false)
                                  : (searchOrigin === 'Google') ? (e.facebook === false && e.google === true)
                                    : (searchOrigin === 'Portal') ? (e.facebook === false && e.google === false)
                                      : true
                                )
                        )
                  .map((e, index) => {
                return (
                  <tr key={ index }>
                    <td>{ e.email }</td>
                    <td>{ e.name }</td>
                    <td>{ 
                          (e.role === 'ADMIN_ROLE')
                            ? <div className='text-danger fw-bold'>Administrador</div> 
                            : (e.role === 'USER_ROLE')
                              ? <div className='text-success fw-bold'>Usuario</div> 
                              : <div className='text-warning fw-bold'>Rol No Válido</div>
                        }
                    </td>
                    <td>
                      {
                        (e.facebook)
                          ? <i className="fs-5 bi bi-facebook text-secondary"></i>
                          : (e.google)
                            ? <i className="fs-5bi bi-google text-secondary"></i>
                            : <i className="fs-5 bi bi-pc-display-horizontal text-secondary"></i>
                      }
                    </td>
                    <td>
                      { 
                        (e.status) 
                        ? <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                        : <i className="fs-5 bi bi-x-circle-fill text-danger"></i> 
                      }
                    </td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={ e => handleEdit(e) } className='btn btn-outline-dark' value={ e.uid } /*onMouseOver={ e => handleOver(e) }*/>
                          <i className="fs-5 bi bi-pencil-fill"></i>
                        </button>
                        { (e.status)
                          ? <button onClick={ e => handleDisable(e) } className='btn btn-outline-dark' value={ e.uid }>
                              <i className="fs-5 bi bi-x-circle-fill"></i>
                            </button>
                          : <button onClick={ e => handleEnable(e) } className='btn btn-outline-dark' value={ e.uid }>
                              <i className="fs-5 bi bi-check-circle-fill"></i>
                            </button>
                        }
                      </div>
                    </td>
                  </tr>
                  );
                })
              }
              </tbody>
              <tfoot className='text-center'>
                <tr className='table-dark'>
                  <th scope="col">Email</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Origen</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Editar</th>
                </tr>
              </tfoot>

            </table>
          </div>

          <NewUser />
          <EditUser />
        </div>
    </div>
  )
}
