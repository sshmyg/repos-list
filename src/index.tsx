import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './providers';
import Home from './pages/Home';

const repos = [
  {
    owner: 'facebook',
    repoName: 'react',
  },
  {
    owner: 'reduxjs',
    repoName: 'reselect',
  },
  {
    owner: 'reduxjs',
    repoName: 'redux',
  },
  {
    owner: 'acdlite',
    repoName: 'recompose',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Home repos={repos} />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);
