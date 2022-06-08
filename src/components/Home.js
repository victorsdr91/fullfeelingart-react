import React from 'react';
import AboutMe from './Aboutme';
import { Row, Column } from 'react-foundation';
import parse from 'html-react-parser';

import portrait from '../assets/images/portrait.jpeg';

const Home = (props) => {
	const texts = { title: "Lorem impsum",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
	return (
			<>
				<div className="portfolio post-header"></div>
				<section className="row">
					<AboutMe />
				</section>
				<section className="portrait-wrapper">
					<Row className="medium-unstack portrait align-middle">
						<Column><img src={portrait} className="portrait-image" /></Column>
						<Column className="font-italic">
							<h4><strong>{texts.title}</strong></h4>
							{parse(texts.description)}
							
						</Column>
						
					</Row>
				</section>
			</>
		);
};

export default Home;