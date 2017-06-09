import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-100774275-1');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


