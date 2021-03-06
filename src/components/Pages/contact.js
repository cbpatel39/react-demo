import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
return (
	<HelmetProvider>
		<Helmet>
        	<title>Hommati - Contact Us</title>
        	<meta name="description" content="Hommati" />
      	</Helmet>
		<h1>Mail us on feedback@geeksforgeeks.org</h1>
	</HelmetProvider>
);
};

export default Contact;
