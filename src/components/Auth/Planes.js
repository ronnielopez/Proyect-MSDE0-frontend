import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { PlanesAuth } from '../../services/PlanesAuth';
import axios from 'axios';
import swal from "sweetalert";


function Planes() {
	const history = useHistory();
	const [cplanes, setCPlanes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let estado = sessionStorage.getItem("Estado");
		if (estado != 1) {
			history.push("/Inicio");
		}
		axios.get("http://127.0.0.1:8000/api/planes").then((response) => {
			setCPlanes(response.data);
			setIsLoading(true);
		});
	}, []);

	const planes = async (estado) => {
		let plan = await PlanesAuth(estado);


	}
	return (
		<>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-tittle text-center mb-100">
							<span>Ultimo paso</span>
							<h2>Escoge el plan que mas se adapte a ti</h2>
						</div>
					</div>
				</div>
			</div>

			<section className="pricing-plans text-center pt-1">
				<div className="container">
					<div className="row">
						<div className="col-md-4 animated slideInRight">
							<div className="card pricing-box rounded">
								<div className="card-block">
									<h4 className="card-title">
										{isLoading ? cplanes[0].nombre : 'Cargando datoos'}
									</h4>
									<h6 className="card-text">
										<sup className="currency">
											$
								</sup>
										<span className="amount">
											{isLoading ? cplanes[0].precio : 'Cargando datoos'}
										</span>
										<span className="month">
											/ mo
								</span>
									</h6>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[0].beneficio1 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[0].beneficio2 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[0].beneficio3 : 'Cargando datoos'}
									</li>
								</ul>
								<div className="card-block">
									<span className="btn btn-outline-start" onClick={() => {
										planes({ estado: 3 });
									}}>Escoger</span>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card pricing-box pricing-premium">
								<div className="card-block">
									<h4 className="card-title">
										{isLoading ? cplanes[1].nombre : 'Cargando datoos'}
									</h4>
									<h6 className="card-text">
										<sup className="currency">
											$
								</sup>
										<span className="amount">
											{isLoading ? cplanes[1].precio : 'Cargando datoos'}
										</span>
										<span className="month">
											/ mo
								</span>
									</h6>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[1].beneficio1 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[1].beneficio2 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[1].beneficio3 : 'Cargando datoos'}
									</li>
								</ul>
								<div className="card-block">
									<span className="btn btn-start" onClick={() => {
										planes({ estado: 4 });
									}}>Escoger</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 animated slideInLeft">
							<div className="card pricing-box">
								<div className="card-block">
									<h4 className="card-title">
										{isLoading ? cplanes[2].nombre : 'Cargando datoos'}
									</h4>
									<h6 className="card-text">
										<sup className="currency">
											$
								</sup>
										<span className="amount">
											{isLoading ? cplanes[2].precio : 'Cargando datoos'}
										</span>
										<span className="month">
											/ mo
								</span>
									</h6>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[2].beneficio1 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[2].beneficio2 : 'Cargando datoos'}
									</li>
									<li className="list-group-item text-center d-inline-block">
										{isLoading ? cplanes[2].beneficio3 : 'Cargando datoos'}
									</li>
								</ul>
								<div className="card-block">
									<span className="btn btn-outline-start" onClick={() => {
										planes({ estado: 5 });
									}}>Escoger</span>
								</div>
							</div>
						</div>
						<div className="col-md-12 my-5">
							<span className="btn btn-outline-secondary" onClick={() => {
								swal({ title: 'Bienvenido a Alpha - Medic', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Inicio'; window.location.reload(true); });
							}}>Solo usuario</span>
						</div>
					</div>
				</div>
			</section>

		</>

	);

}


export default Planes;