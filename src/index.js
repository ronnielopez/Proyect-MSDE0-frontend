import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {  Route, Switch } from 'react-router-dom';
import indexRoutes from './routes/index.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
  <HashRouter>
    <Switch >
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component}  />;
      })}
    </Switch>
  </HashRouter>
  </>
  ,document.getElementById('root')); 