import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './components/pages';
import { ThemeProvider } from 'emotion-theming';
import './App.css';

const App = () => (
  <Switch>
    {routes.map(route => <Route {...route} />)}
  </Switch>
);

export default App;
