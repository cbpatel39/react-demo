import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	{/* <Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
        <NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav> */}


	<header>
		<nav class="navbar navbar-expand-lg navbar-light">
		  <div class="container">
		  	  	<NavLink to='/'>
				  <img src="./images/logo.png" />
				</NavLink>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
		      <ul class="navbar-nav ms-auto mt-2 mb-lg-0">
		      	<li class="nav-item dropdown">
		          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		            why hommati
		          </a>
		          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
		            <li><a class="dropdown-item" href="/SERVICES">our services</a></li>
		            <li><a class="dropdown-item" href="/FRANCHISE-BENEFITS">franchise benefits</a></li>
		            <li><a class="dropdown-item" href="/EMERGING-INDUSTRY">emerging industry</a></li>
		            <li><a class="dropdown-item" href="/INVESTMENT">investment</a></li>
		            <li><a class="dropdown-item" href="/EARNINGS">earnings</a></li>
		            <li><a class="dropdown-item" href="/TRAINING-SUPPORT">training & support</a></li>
		            <li><a class="dropdown-item" href="/OUR-AWARDS">our awards</a></li>
		            <li><a class="dropdown-item" href="/FRANCHISEES-TESTIMONOALS">franchise testimonials</a></li>
		          </ul>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="/our-story">our story</a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="/ideal-candidate">ideal candidate</a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="/step-to-ownership">steps to ownership</a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="/faq">faq's</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	</header>
	</>
);
};

export default Navbar;
