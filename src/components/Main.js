import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';

const Main = (props) => {
  return (
    <Switch>
      <Route exact strict path='/' component={Home}></Route>
      <Route exact path='/what/' render={() => 'work in progress'}></Route>
      <Route exact path='/who/' render={() => 'work in progress'}></Route>
      <Route exact path='/admin/' component={Admin}></Route>
    </Switch>
  );
}

export default Main;