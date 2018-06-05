import React from 'react';

const Home = () => (
  			<div className="carousel-home">
			  <div id="carouselExampleControls" className="carousel slide heightvh" data-ride="carousel">
		      <ol className="carousel-indicators">
		         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		      </ol>
		      <div className="carousel-inner">
		         <div className="carousel-item active">
		            <img className="d-block min-width" src="/assets/img/1.jpg" alt="First slide"/>
		            <div className="carousel-caption d-none d-md-block">
		              <h3>First Slide</h3>
		              <p>This is a description for the first slide.</p>
		            </div>
		         </div>
		         <div className="carousel-item">
		            <img className="d-block min-width" src="assets/img/2.jpg" alt="Second slide" />
		            <div className="carousel-caption d-none d-md-block">
		              <h3>First Slide</h3>
		              <p>This is a description for the first slide.</p>
		            </div>
		         </div>
		         <div className="carousel-item">
		            <img className="d-block min-width" src="/assets/img/3.jpg" alt="Third slide" />
		            <div className="carousel-caption d-none d-md-block">
		              <h3>First Slide</h3>
		              <p>This is a description for the first slide.</p>
		            </div>
		         </div>
		      </div>
		      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		      </a>
		      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		      </a>
		   </div>
		  </div>
)

export default Home