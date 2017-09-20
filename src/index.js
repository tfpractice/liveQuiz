import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import registerServiceWorker from './registerServiceWorker';

console.log(
  'window.apiResponse',
  window.apiResponse.items.map(e => e.occurrences)
);

console.log(
  ' mapped items',
  window.apiResponse.items.map(e => e.occurrences.map(o => new Date(o.start)))

  // .map(d => new Date(d))
);
ReactDOM.render(
  <App events={window.apiResponse.items} />,
  document.getElementById('root')
);
registerServiceWorker();
