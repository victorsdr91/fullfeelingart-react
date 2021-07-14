import React from 'react';
import AboutMe from './Aboutme';

const Home = (props) => {
	return (
			<React.Fragment>
				<div className="portfolio"></div>
				<section className="row">
					<AboutMe />
				</section>
			</React.Fragment>
		);
};

export default Home;