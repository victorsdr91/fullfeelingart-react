import React, { useState, useEffect } from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/style.scss';
import 'foundation-icons/foundation-icons.css';

import Main from './components/Main';
import Header from './components/header/Header';

const mockedURL = "http://localhost:3000/";

const App = (props) => {
	const [user, setUser] = useState({ user: {} });

	useEffect(async () => {
		const response = await fetch(mockedURL + 'users/1');
		setUser(await response.json());
	}, []);

	return (
					 	<React.Fragment>
					 		<Header logo="Full Feeling Art" user={user}/>
					 		<Main user={user}/>
						</React.Fragment>
					);
};


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
