import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
	
  <header>
	    <div class="topnav" id="myTopnav">
	    	<a href="/" class="active">Home</a>
			<a href="/Info">Info</a>
			<a href="/Profile">Profile</a>
			<div class="dropdown">
		  		<button class="dropbtn">Schedule 
		    		<i class="fa fa-caret-down"></i>
		  		</button>
		  		<div class="dropdown-content">
		    		<a href="/">Schedule 1</a>
		    		<a href="/">Schedule 2</a>
		    		<a href="/">Schedule 3</a>
		  		</div>
		  	</div> 
			<a href="/about">About</a>
			<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
		</div>
  </header>
  
)

export default Header
