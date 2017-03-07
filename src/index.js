import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './style.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
