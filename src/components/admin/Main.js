import React from 'react';
import { Callout } from 'react-foundation';
import { Switch, Route } from 'react-router-dom';
import EditableAboutMe from "./EditableAboutMe";

const Main = (props) => {
    return (
        <Callout>
            <Switch>
                <Route exact path='/show-articles' render={() => 'work in progress'}></Route>
                <Route exact path='/settings' render={() => 'work in progress'}></Route>
                <Route exact path='/edit-contact' render={() => 'work in progress'}></Route>
                <Route exact path='/edit-about-me' component={EditableAboutMe}></Route>
            </Switch>
        </Callout>
    );
}

export default Main;