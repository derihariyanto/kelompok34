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
						
						<h2><b>Rs. SEGER WARAS</b></h2>
						<p>Jl. Anu no.69 Ngayojokarto<br/>
			         Telp : 0895-3675-11128<br/>
			         fax : 34536
			      </p>
						
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
			  <a href="/Artikel1">Artikel</a>
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
	  	</header>
		)
	}
}

export default Header
