import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/admin' render={ () => (<Admin {...props} />)}></Route>
    </Switch>
  );
}

export default Main;