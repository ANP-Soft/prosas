import React from 'react'

export const Subscription = () => {
  return (
<div>
    
    <section id='suscribete' className='bg-secondary text-light py-5'>
        <div className='container'>
            <div className='text-center my-5 h1'>
                <i className='bi bi-credit-card-fill'></i>
                <i className='bi bi-credit-card-fill'></i>
                <i className='bi bi-credit-card-fill'></i>
            </div>
            <h2 className='text-center display-4 mb-5'>Suscríbete</h2>
            <p className='lead mb-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat dolorem corrupti iste molestiae nesciunt officiis incidunt, quam modi dolorum rem quod quia ipsum id libero, laboriosam odio delectus aspernatur.</p>
            <div className='row text-dark text-center'>
                <div className='col-12 col-md-4 mb-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='my-5'>$100</h2>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Lorem ipsum dolor sit.</li>
                            <li className='list-group-item'>Lorem, ipsum dolor.</li>
                            <li className='list-group-item'>Lorem, ipsum.</li>
                            <li className='list-group-item'>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <div className='card-body'>
                            <button className='btn btn-dark' type='button' data-bs-toggle='modal' data-bs-target='#staticBackdropPlan1'>
                                Suscríbete
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-4'>
                    <div className='card text-center text-dark'>
                        <div className='card-body'>
                            <h2 className='my-5'>$500</h2>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Lorem ipsum dolor sit.</li>
                            <li className='list-group-item'>Lorem, ipsum dolor.</li>
                            <li className='list-group-item'>Lorem, ipsum.</li>
                            <li className='list-group-item'>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <div className='card-body'>
                            <button className='btn btn-dark' type='button' data-bs-toggle='modal' data-bs-target='#staticBackdropPlan2'>
                                Suscríbete
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-4'>
                    <div className='card text-center text-dark'>
                        <div className='card-body'>
                            <h2 className='my-5'>$900</h2>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Lorem ipsum dolor sit.</li>
                            <li className='list-group-item'>Lorem, ipsum dolor.</li>
                            <li className='list-group-item'>Lorem, ipsum.</li>
                            <li className='list-group-item'>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <div className='card-body'>
                            <button className='btn btn-dark' type='button' data-bs-toggle='modal' data-bs-target='#staticBackdropPlan3'>
                                Suscríbete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className='modal fade' id='staticBackdropPlan1' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel1' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel1'>Modal title plan 1</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aperiam architecto recusandae doloribus, eveniet maxime ab, rem ea libero voluptatem illo officiis cumque nesciunt sapiente corrupti id hic temporibus aliquam ducimus. Omnis repellat laudantium nobis asperiores, id nihil et qui.
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Ok</button>
            </div>
          </div>
        </div>
    </div>

    <div className='modal fade' id='staticBackdropPlan2' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel2' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel2'>Modal title plan 2</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aperiam architecto recusandae doloribus, eveniet maxime ab, rem ea libero voluptatem illo officiis cumque nesciunt sapiente corrupti id hic temporibus aliquam ducimus. Omnis repellat laudantium nobis asperiores, id nihil et qui.
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Ok</button>
            </div>
          </div>
        </div>
    </div>

    <div className='modal fade' id='staticBackdropPlan3' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel3' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel3'>Modal title plan 3</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aperiam architecto recusandae doloribus, eveniet maxime ab, rem ea libero voluptatem illo officiis cumque nesciunt sapiente corrupti id hic temporibus aliquam ducimus. Omnis repellat laudantium nobis asperiores, id nihil et qui.
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Ok</button>
            </div>
          </div>
        </div>
    </div>

</div>
  )
}
