import React, { Component } from 'react';
import TestService from '../../service/TestService';
import Block from '../common/Block';
import BlockItem from '../common/BlockItem';
import Button from '../common/Button';
import Input from '../common/Input';
import Template from '../common/Template';

export default class ThemeDatePage extends Component {
  state = {
    place: [],
  };
  componentDidMount = async () => {
    const req = await TestService.executePlaceService();
    const res = req.data;
    this.setState({ place: res });
  };
  render() {
    const place = this.state.place;

    return (
      <Template>
        <Block>
          <BlockItem col="6" label="검색">
            <Input />
            <Input />
            <Button>검색</Button>
          </BlockItem>
          <BlockItem col="6" label="찾기">
            <Input />
            <Button>찾기</Button>
          </BlockItem>
        </Block>
        {place.map(item => (
          <div key={item.id}>
            <div>{item.username}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </Template>
    );
  }
}
