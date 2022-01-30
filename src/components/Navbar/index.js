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
		<nav className="navbar navbar-expand-lg navbar-light">
		  <div className="container">
		  	  	<NavLink to='/'>
				  <img src="./images/logo.png" />
				</NavLink>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
		      <ul className="navbar-nav ms-auto mt-2 mb-lg-0">
		      	<li className="nav-item dropdown">
		          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		            why hommati
		          </a>
		          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
		            <li><NavLink className='dropdown-item' to='/services'>our services</NavLink></li>
		            <li><a className="dropdown-item" href="/FRANCHISE-BENEFITS">franchise benefits</a></li>
		            <li><a className="dropdown-item" href="/EMERGING-INDUSTRY">emerging industry</a></li>
		            <li><a className="dropdown-item" href="/INVESTMENT">investment</a></li>
		            <li><a className="dropdown-item" href="/EARNINGS">earnings</a></li>
		            <li><a className="dropdown-item" href="/TRAINING-SUPPORT">training & support</a></li>
		            <li><a className="dropdown-item" href="/OUR-AWARDS">our awards</a></li>
		            <li><a className="dropdown-item" href="/FRANCHISEES-TESTIMONOALS">franchise testimonials</a></li>
		          </ul>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="/our-story">our story</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="/ideal-candidate">ideal candidate</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="/step-to-ownership">steps to ownership</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="/faq">faq's</a>
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
