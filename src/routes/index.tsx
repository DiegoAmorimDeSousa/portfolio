import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import GlobalStyles from '../global/styles';

import Home from '../pages/home';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;