import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive_style.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './components/Pages';
import About from './components/Pages/about';
import SignUp from './components/Pages/signup';
import Contact from './components/Pages/contact';
import Services from './components/Pages/services';


function App() {
return (
	<Router>
		<Navbar />
		<Routes>
			<Route exact path='/' exact element={<Home />} />
			<Route path='/about' element={<About/>} />
			<Route path='/services' element={<Services/>} />
			<Route path='/contact' element={<Contact/>} />
			<Route path='/sign-up' element={<SignUp/>} />
		</Routes>
	</Router>
);
}

export default App;
