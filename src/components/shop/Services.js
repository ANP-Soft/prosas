import React from 'react'

export const Services = () => {
  return (
    <section className='bg-dark text-white py-5' id='servicios'>
        <div className='container'>
            <div className='text-center my-5'>
                <i className='bi bi-star-fill h1'></i>
                <i className='bi bi-star-fill h1'></i>
                <i className='bi bi-star-fill h1'></i>
            </div>
            <h2 className='text-center display-4 mb-5'>Servicios</h2>

            <div className='row align-items-center'>
                <div className='col-12 col-lg-4 text-center'>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda, dicta doloribus illo incidunt accusamus expedita ex mollitia suscipit veritatis enim porro iste quae neque nesciunt amet sint cupiditate. In.</p>
                    <button className='btn btn-outline-light mb-5 mb-lg-0'>Suscríbete</button>
                </div>
                <div className='col-12 col-lg-8'>
                    <img src='./assets/6.jpg' alt='AnimalPhoto' className='img-fluid rounded' />
                </div>
            </div>
            <h1 className='py-5 display-6'>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam dignissimos reiciendis qui, autem tenetur aliquid! Ipsa accusamus eaque delectus aperiam mollitia hic maiores eius! Veniam eum magnam quos sunt.'</h1>
        </div>
    </section>
  )
}
