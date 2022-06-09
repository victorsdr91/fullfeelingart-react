import React from 'react';
import AboutMe from './Aboutme';
import Summary from './Summary';

const Home = (props) => {
	return (
			<div className='sections'>
				<div className="portfolio post-header">
					<AboutMe />
				</div>
				<Summary />
			</div>
		);
};

export default Home;