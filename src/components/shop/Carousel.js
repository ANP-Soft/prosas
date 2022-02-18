import React from 'react'

export const Carousel = () => {
  return (
    <section id='inicio'>
        <div id='carouselInicio' className='carousel slide mt-5' data-bs-ride='carousel'>
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#carouselInicio' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                <button type='button' data-bs-target='#carouselInicio' data-bs-slide-to='1' aria-label='Slide 2'></button>
                <button type='button' data-bs-target='#carouselInicio' data-bs-slide-to='2' aria-label='Slide 3'></button>
                <button type='button' data-bs-target='#carouselInicio' data-bs-slide-to='3' aria-label='Slide 4'></button>
                <button type='button' data-bs-target='#carouselInicio' data-bs-slide-to='4' aria-label='Slide 5'></button>
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img src='./assets/1.jpg' className='d-block w-100' alt='img1' />
                <div className='carousel-caption d-none d-md-block'>
                    <h5>Sitio en contrucción</h5>
                    <p>Algun contenido de marcador representativo para la primera diapositiva.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='./assets/2.jpg' className='d-block w-100' alt='img2' />
                <div className='carousel-caption d-none d-md-block'>
                    <h5>Site under construction</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='./assets/3.jpg' className='d-block w-100' alt='img3' />
                <div className='carousel-caption d-none d-md-block'>
                    <h5>Site en construction</h5>
                    <p>Du contenu d'espace réservé représentatif pour la troisième diapositive.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='./assets/4.jpg' className='d-block w-100' alt='img4' />
                <div className='carousel-caption d-none d-md-block'>
                    <h5>Website im Aufbau</h5>
                    <p>Einige repräsentative Platzhalterinhalte für die vierte Folie.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='./assets/5.jpg' className='d-block w-100' alt='img5' />
                <div className='carousel-caption d-none d-md-block'>
                    <h5>Сайт в стадии строительства</h5>
                    <p>Некоторые репрезентативные заполнители для пятого слайда.</p>
                </div>
              </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselInicio' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
              </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselInicio' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    </section>
  )
}
