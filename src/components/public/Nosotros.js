import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Img from '../../img/gallery/contact_form.png';

function Nosotros() {
  return (
    <>
     <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Nosotros</h1>
      </Jumbotron>

        <div className="container">
         <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-100">
                        <span>Quienes somos</span>
                        <h2>Conoce mas de nosotros</h2>
                    </div>
                </div>
            </div>
            </div> 
            <div className="all-starups-area testimonial-area fix">
        <div className="starups">
           
            <div className="h1-testimonial-active">
                
                <div className="single-testimonial text-center">
                    
                    <div className="testimonial-caption ">
                      <div className="section-tittle text-center">
                      <h2>Somos AlphaMedic</h2>
                      </div>   
                        <div className="testimonial-top-cap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
                          placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                           possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
        
        <div className="starups-img"></div>
    </div>

    <div className="all-starups-area testimonial-area fix">
    <div className="starups-img"></div>
        <div className="starups">
           
            <div className="h1-testimonial-active">
                
                <div className="single-testimonial text-center">
                    
                    <div className="testimonial-caption ">
                      <div className="section-tittle text-center">
                      <h2>Siempre cuidando de ti</h2>
                      </div>   
                        <div className="testimonial-top-cap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
                          placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                           possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
       
        </div>
        
    </div>
          
    </>
  );
}

export default Nosotros;
