import React from 'react';
import './style.css';

export const CheckingScreen = () => {
  return (
    <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                    <div className='card bg-dark text-white' >
                        <div className='card-body p-5 text-center'>
                            <div className='mb-md-5 mt-md-4 pb-5'>
                                <div className="spinner-border text-light spiner-custom" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
