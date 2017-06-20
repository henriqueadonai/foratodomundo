import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';
import ReactGA from 'react-ga';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactGA.initialize('UA-100774275-1');

