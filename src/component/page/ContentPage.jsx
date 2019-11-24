import React, { Component } from 'react';
import LoginService from '../../service/LoginService';
import TestService from '../../service/TestService';
import Block from '../common/Block';
import Template from '../common/Template';

export default class ContentPage extends Component {
  state = {
    hello: '',
  };

  componentDidMount = async () => {
    LoginService.setupAxiosInterceptors();
    const req = await TestService.executeHelloWorldService();
    const res = req.data;
    this.setState({ hello: res });
  };
  render() {
    return (
      <Template history={this.props.history}>
        <Block>{this.state.hello}</Block>
      </Template>
    );
  }
}
