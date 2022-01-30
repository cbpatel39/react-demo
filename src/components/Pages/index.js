import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
return (
	<HelmetProvider>
		<Helmet>
        	<title>Hommati - Home</title>
        	<meta name="description" content="Hommati" />
      	</Helmet>
		<div className="franchise_banner">
			<div className="franchise_video_content">
				<img alt="Hommati" src="./images/Drone Prop Circle Fixed.png" />
				<h1>Learn everything about owning a Hommati Franchise with the 20 minute Franchise Tour</h1>
				<button className="franchise_banner_bt">take the franchise tour</button>
			</div>
			<div className="franchise_video">
				<img alt='Hommati' src='./images/Banner1.jpg' />
			</div>

		</div>

		<section className="franchise_count_area mt-7 mb-3">
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-sm col-6">
						<div className="services_count_box">
							<img alt="Hommati" src="./images/f_count1.png" />
							<h4>126</h4>
							<h6>hommati franchisees</h6>
						</div>
					</div>
					<div className="col-sm col-6">
						<div className="services_count_box">
							<img alt="Hommati" src="./images/f_count2.png" />
							<h4>37</h4>
							<h6>states hommati is in</h6>
						</div>
					</div>
					<div className="col-sm col-6">
						<div className="services_count_box">
							<img alt="Hommati" src="./images/f_count1.png" />
							<h4>10,918</h4>
							<h6>agent using hommati</h6>
						</div>
					</div>
					<div className="col-sm col-6">
						<div className="services_count_box">
							<img alt="Hommati" src="./images/f_count3.png" />
							<h4>10,922</h4>
							<h6>services completed</h6>
						</div>
					</div>
					<div className="col-sm col-6">
						<div className="services_count_box">
							<img alt="Hommati" src="./images/f_count4.png" />
							<h4>2,427,004</h4>
							<h6>BUYERS SEARCHING ON HOMMATI.COM</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	</HelmetProvider>
);
};

export default Home;
