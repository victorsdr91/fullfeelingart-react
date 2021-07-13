import React from 'react';

export default class AboutMe extends React.Component {

	render() {
		const text = {
			title: "Wendy Ladino Clavijo - Psicóloga",
			description: "Soy psicóloga con master en Psicología Clínica de la Salud, Terapia de las Artes (Arteterapia y Musicoterapia), ISEP, España. Trabajo con adolescentes, adultos jóvenes y adultos mayores, con el propósito de contribuir a su calidad de vida y bienestar físico y mental.",
		};

		return (
			<div className="column entry">
				<h3>{text.title}</h3>
				<p>{text.description}</p>
			</div>
		);

	}
}