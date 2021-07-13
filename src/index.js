import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/header';
import AboutMe from './components/aboutme/aboutme';
import {} from "react-foundation";
import './css/variables.scss';
import './css/style.scss';


class Section extends React.Component {
	render() {
		const sectionText = "Esta es la seccion de la pagina de Wendy";
		return (
			<section className="row">
				<AboutMe />
			</section>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Header logo="Full Feeling Art"/>
				<Section />
			</div>
		);
	}
}

render(
  <App />,
  document.getElementById('app')
);
