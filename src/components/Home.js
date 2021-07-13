import React from 'react';
import AboutMe from './Aboutme';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="portfolio"></div>
				<section className="row">
					<AboutMe />
				</section>
			</div>
		);
	}
}

export default Home;