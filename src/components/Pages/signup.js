import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SignUp = () => {
return (
	<HelmetProvider>
		<Helmet>
        	<title>Hommati - Signup</title>
        	<meta name="description" content="Hommati" />
      	</Helmet>
		<h1>Sign Up Successful</h1>
	</HelmetProvider>
);
};

export default SignUp;
