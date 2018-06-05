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
		    <div className="topnav" id="myTopnav">
		    	
		    	<a href="/" className="active">Home</a>
				<a href="/Info">Info</a>
				<a href="/Profile">Profile</a>
				<div className="dropdown">
			  		<button className="dropbtn">Schedule 
			    		<i className="fa fa-caret-down"></i>
			  		</button>
			  		<div className="dropdown-content">
			    		<a href="/Schedule/1">Schedule 1</a>
			    		<a href="/Schedule/2">Schedule 2</a>
			    		<a href="/Schedule/3">Schedule 3</a>
			  		</div>
			  	</div> 
				<a href="/About">About</a>
				<a href="javascript:void(0);" onClick={this.myFunction} className="icon">&#9776;</a>
			</div>
	  </header>
		)
	}
}

export default Header
