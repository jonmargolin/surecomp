import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './app.scss';
import LoginHome from './container/login';
import Auth from './container/routerAuthRequired';
import Dashboard from './container/dashboard';




export class App extends Component  {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"   render={() => (
            <Auth
              orRender={<Dashboard  />}
            />
          )} />
          <Route exact path="/login" component={LoginHome}/>
        </Switch>
      </div>
    );
  }
};

export default App;
