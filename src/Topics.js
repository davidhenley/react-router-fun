import React from 'react';
import { Route, Link } from 'react-router-dom';

const Topic = ({ match }) => <div className="Topic">{match.params.id}</div>;

const Topics = ({ match }) => (
  <div className="Topics">
    <ul>
      <li>
        <Link to={`${match.url}/test`}>Test</Link>
      </li>
      <li>
        <Link to={`${match.url}/test2`}>Test2</Link>
      </li>
      <li>
        <Link to={`${match.url}/test3`}>Test3</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:id`} component={Topic} />
  </div>
);

export default Topics;
