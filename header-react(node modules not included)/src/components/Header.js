import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component{
	constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }


	render(){
		return(
			<header>
		    <div className="container-fluid header-cont">
			<div className="row">
				<div className="col-md-8 testcolor2">
					<div className="col-md-2 logo">
						 <img src="assets/logors.png" className="max-height" />
					</div>
					<div className="col-md-9 logo-text">
						
						<h2><b>RSKIA PKU KOTAGEDE</b></h2>
						<p><b>Jl. Kemasan No.43, Kotagede,Daerah Istimewa Yogyakarta<br/>Email : pkukotagede@yahoo.co.id<br/>Telp : (0274)371201</b></p>
						
					</div>
				</div>
				<div className="col-md-4 header-right">
					<div  className="socmed">
					</div>
				</div>
			</div>
		</div>

			

			<div className="topnav" id="myTopnav">
			  <a href="/" className="aktif">Home</a>
			  <a href="/Jadwal">Jadwal Dokter</a>
			  <a href="/Artikel">Artikel</a>
			  <a href="/informasi">Informasi</a>
			  <a href="/Galery">Galery</a>
			  <a href="/Sejarah">Sejarah</a>
			  <a href="/Contact_Us">Contact Us</a>
			  <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>&#9776;</a>
			</div> 

			
			  <div className="toplogo">
			     <img src="assets/logors.png" alt="logo" />
			    <div className="logolarge">
			      <h4>Rs. SEGER WARAS</h4>
			      <p>Jl. Anu no.69 Ngayojokarto<br/>
			         Telp : 0895-3675-11128<br/>
			         fax : 34536
			      </p>
			    </div>
			  </div>


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

	  	</header>
		)
	}
}

export default Header
