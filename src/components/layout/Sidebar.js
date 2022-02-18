import React from 'react'

export const Sidebar = () => {

const handleClick = (e) => {
    e.preventDefault();
    console.log('page: ', e.currentTarget.value);
    // dispatch(setNavigation({page: e.currentTarget.value}));
}

  return (
    <nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse vh-100'>
      <div className='position-sticky pt-3'>
        <ul className='nav flex-column'>
          
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='home'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-house-door-fill mx-2"></i> 
                    Home
                </button>
            </div> 
          </li>   
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='dashboard'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-clipboard-data-fill mx-2"></i> 
                    Estadisticas
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='orders'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-file-earmark-text-fill mx-2"></i>
                    Pedidos
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='products'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-cart-fill mx-2"></i>
                    Productos
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='customers'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-people-fill mx-2"></i>
                    Clientes
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='reports'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-bar-chart-fill mx-2"></i>
                    Reportes
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='integrations'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-layers-fill mx-2"></i>
                    Integraciones
                </button>
            </div>
          </li>
        </ul>

        <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-muted'>
          <span>Administración de Datos</span>
          {/* <a className='link-secondary' href='#' aria-label='Add a new report'>
            <span data-feather='plus-circle'></span>
          </a> */}
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='products'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-basket-fill mx-2"></i>
                    Productos
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='categories'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-tags-fill mx-2"></i>
                    Categorias
                </button>
            </div>
          </li>
          <li className='nav-item'>
            <div className='d-grid gap-2 mt-1'>
                <button 
                    className='btn btn-dark text-start'
                    value='users'
                    onClick={ e => handleClick(e) }
                >
                    <i className="bi bi-person-badge-fill mx-2"></i>
                    Usuarios
                </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
