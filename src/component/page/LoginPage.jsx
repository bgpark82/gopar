import React, { Component } from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <AuthTemplate>
          <AuthForm type="login" history={this.props.history} />
        </AuthTemplate>
      </div>
    );
  }
}
