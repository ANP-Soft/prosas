import React from 'react'

export const Comments = () => {
  return (
    <section className='bg-light py-5' id='comentarios'>
        <div className='container'>
            <div className='text-center my-5 h1'>
                <i className='bi bi-chat-square-dots'></i>
                <i className='bi bi-chat-square-dots'></i>
                <i className='bi bi-chat-square-dots'></i>
            </div>
            <h2 className='text-center display-4 mb-5'>Comentarios</h2>
            <p className='lead mb-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae illum atque, harum tempora maiores consequuntur corporis voluptas odio sequi, laudantium voluptates eos id sit reiciendis! Neque, magnam delectus! Placeat, deleniti?</p>
            
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-5 mb-md-0'>
                    <img src='./assets/7.jpg' alt='' className='img-fluid rounded' />
                </div>
                <div className='col-12 col-md-6 col-lg-8 col-xl-9'>
                    <div className='accordion' id='accordionExample'>
                        <div className='accordion-item'>
                            <h2 className='accordion-header' id='headerItem1'>
                                <button className='accordion-button'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#id1'
                                        aria-expanded='true'
                                        aria-controls='id1'>Accordion Item #1
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse show'
                                id='id1'
                                aria-labelledby='headerItem1'
                                data-bs-parent='#accordionExample'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <h2 className='accordion-header' id='headerItem2'>
                                <button className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#id2'
                                        aria-expanded='false'
                                        aria-controls='id2'>Accordion Item #2
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse'
                                id='id2'
                                aria-labelledby='headerItem2'
                                data-bs-parent='#accordionExample'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <h2 className='accordion-header' id='headerItem3'>
                                <button className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#id3'
                                        aria-expanded='false'
                                        aria-controls='id3'>Accordion Item #3
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse'
                                id='id3'
                                aria-labelledby='headerItem3'
                                data-bs-parent='#accordionExample'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <h2 className='accordion-header' id='headerItem4'>
                                <button className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#id4'
                                        aria-expanded='false'
                                        aria-controls='id4'>Accordion Item #4
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse'
                                id='id4'
                                aria-labelledby='headerItem4'
                                data-bs-parent='#accordionExample'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
