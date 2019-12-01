import React, { Component } from 'react';
import TestService from '../../service/TestService';
import Block from '../common/Block';
import Template from '../common/Template';

export default class ContentPage extends Component {
  state = {
    hello: '',
  };

  componentDidMount = async () => {
    const req = await TestService.executeHelloWorldService();
    const res = await req.data;
    console.log(res);
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
