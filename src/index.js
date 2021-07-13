import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/style.scss';
import 'foundation-icons/foundation-icons.css';

import Main from './components/Main';
import Header from './components/header/Header';

const mockedURL = "http://localhost:3000/";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
    fetch(mockedURL + 'users/1')
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        this.setState({ user: user })
      })
  }

	render() {
		 return(
		 	<div>
		 		<Header logo="Full Feeling Art" user={this.state.user}/>
     		<Main user={this.state.user}/>
   	  </div>
		 	);
	}
}


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
