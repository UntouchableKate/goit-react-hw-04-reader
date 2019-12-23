// Core
import React from 'react';

// routing
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Reader from '../Reader';

// server
import publications from '../../server/publications.json';
import routes from '../../routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.READER}
        exact
        render={props => <Reader {...props} publications={publications} />}
      />
      <Redirect to={routes.FIRST_ITEM} />
    </Switch>
  </BrowserRouter>
);

// <Reader publications={publications} />;

export default App;
