import React, { Component } from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <AuthTemplate>
          <AuthForm type="login" />
        </AuthTemplate>
        {/* <Button>로그인</Button> */}
      </div>
    );
  }
}
