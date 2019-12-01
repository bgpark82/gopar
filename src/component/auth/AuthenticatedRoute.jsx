import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginService from '../../service/LoginService';

export default class AuthenticatedRoute extends Component {
  componentWillMount = () => {
    LoginService.setupAxiosInterceptors();
  };

  render() {
    if (LoginService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}
