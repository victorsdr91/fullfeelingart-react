import React from 'react';
import { useDispatch } from 'react-redux';
import { logged } from './store/reducers/UserReducer'
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useGetUserByNicknameQuery } from "./services/UserService";

import { store } from './store/store';
import { Provider } from 'react-redux';


import './css/style.scss';
import 'foundation-icons/foundation-icons.css';

import Main from './components/Main';
import Header from './components/header/Header';

const App = () => {
	const { data } = useGetUserByNicknameQuery('Wendy');
	const dispatch = useDispatch();
	if(data) {
		dispatch(logged(data[0]));
	}

	return (
			data ? (
			<>
				<Header logo="Full Feeling Art"/>
				<Main />
			</>
			) : null
	);
};


render(
	<Provider store={store}>
	  <BrowserRouter>
		<App />
	  </BrowserRouter>
	</Provider>,
  document.getElementById('app')
);
