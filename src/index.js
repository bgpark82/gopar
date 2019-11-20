import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './component/page/LoginPage';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <App />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
