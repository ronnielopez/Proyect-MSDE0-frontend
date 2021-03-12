import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import Img1 from '../../img/gallery/about1.png';
import Img2 from '../../img/gallery/about2.png';
import {Link} from 'react-router-dom';


function Inicio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
      slide={true} 
      fade={false}  
      activeIndex={index}
      controls={false} 
      onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/6733.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/6725.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.horizonteminero.com/wp-content/uploads/2020/04/insumos.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className="about-area section-padding2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="about-caption mb-50">
                        
                        <div className="section-tittle section-tittle2 mb-35">
                            <span>Acerca de nosotros</span>
                            <h2>Bienvenido a Alphamedic</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
                          placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                           possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
                           <div className="mb-30 container">
                              <div className="my-1">
                                <Link className="btn btn-outline-success w-50" to="/Clinicas">Mira nuestras clinicas</Link>  
                              </div>
                              <div className="my-5">
                                <Link className="btn btn-outline-success w-50" to="/Servicios">Observa todos los beneficios</Link>  
                              </div>
                              <div className="my-1¿5">
                                <Link className="btn btn-outline-success w-50" to="/Registrar">Empieza Ya !!</Link>  
                              </div>
                           </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    
                    <div className="about-img ">
                        <div className="about-font-img d-none d-lg-block">
                            <img src={Img2} alt=""/>
                        </div>
                        <div className="about-back-img ">
                            <img src={Img1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="department_area section-padding2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-100">
                        <span>Servicios</span>
                        <h2>Nuestros servicios</h2>
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
                      <h2>Siempre cuidando de ti</h2>
                      </div>   
                        <div className="testimonial-top-cap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
                          placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                           possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
                        </div>
                        <Link to="/Servicios" className="btn btn-warning w-100 letra">Ver mas servicios</Link>
                    </div>
                </div>
            </div>
       
        </div>
        
        <div className="starups-img"></div>
    </div>
</div>

    <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-100">
                        <span>Empieza ya</span>
                        <h2>Nuestros tarifas</h2>
                    </div>
                </div>
            </div>
          </div>
    
          <section className="pricing-plans text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-4 animated slideInRight">
					<div className="card pricing-box rounded">
						<div className="card-block">
							<h4 className="card-title">
								Basic
							</h4>
							<h6 className="card-text">
								<sup className="currency">
									$
								</sup>
								<span className="amount">
									9
								</span>
								<span className="month">
									/ mo
								</span>
							</h6>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item text-center d-inline-block">
								Lorem
							</li>
							<li className="list-group-item text-center d-inline-block">
								Ipsum
							</li>
							<li className="list-group-item text-center d-inline-block">
								datare
							</li>
							<li className="list-group-item text-center d-inline-block">
								Toye
							</li>
						</ul>
						<div className="card-block">
            <Link to="/Register" className="btn btn-outline-start">Empieza Ya</Link>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card pricing-box pricing-premium">
						<div className="card-block">
							<h4 className="card-title">
								Premium
							</h4>
							<h6 className="card-text">
								<sup className="currency">
									$
								</sup>
								<span className="amount">
									19
								</span>
								<span className="month">
									/ mo
								</span>
							</h6>
						</div>
						<ul className="list-group list-group-flush">
            <li className="list-group-item text-center d-inline-block">
								Lorem
							</li>
							<li className="list-group-item text-center d-inline-block">
								Ipsum
							</li>
							<li className="list-group-item text-center d-inline-block">
								datare
							</li>
							<li className="list-group-item text-center d-inline-block">
								Toye
							</li>
						</ul>
						<div className="card-block">
            <Link to="/Register" className="btn btn-start">Empieza Ya</Link>
						</div>
					</div>
				</div>
				<div className="col-md-4 animated slideInLeft">
					<div className="card pricing-box">
						<div className="card-block">
							<h4 className="card-title">
								Gold
							</h4>
							<h6 className="card-text">
								<sup className="currency">
									$
								</sup>
								<span className="amount">
									39
								</span>
								<span className="month">
									/ mo
								</span>
							</h6>
						</div>
						<ul className="list-group list-group-flush">
            <li className="list-group-item text-center d-inline-block">
								Lorem
							</li>
							<li className="list-group-item text-center d-inline-block">
								Ipsum
							</li>
							<li className="list-group-item text-center d-inline-block">
								datare
							</li>
							<li className="list-group-item text-center d-inline-block">
								Toye
							</li>
						</ul>
						<div className="card-block">
						<Link to="/Register" className="btn btn-outline-start">Empieza Ya</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    </>
  );
}

export default Inicio;
