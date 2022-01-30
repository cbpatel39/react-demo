import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
return (
	<HelmetProvider>
		<Helmet>
        	<title>Hommati - About Us</title>
        	<meta name="description" content="Hommati" />
      	</Helmet>
		<h1>
			GeeksforGeeks is a Computer
			Science portal for geeks.
		</h1>
	</HelmetProvider>
);
};

export default About;
