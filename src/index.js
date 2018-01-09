import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Topics from './Topics';

const App = () => (
  <Router>
    <Route path="/topics" component={Topics} />
  </Router>
);

render(<App />, document.querySelector('#root'));
