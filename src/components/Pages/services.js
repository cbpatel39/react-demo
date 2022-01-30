import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
return (
	<HelmetProvider>
		<Helmet>
        	<title>Hommati - Our Services</title>
        	<meta name="description" content="Hommati" />
      	</Helmet>
		<h1>Services</h1>
	</HelmetProvider>
);
};

export default Contact;
