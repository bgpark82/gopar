import React, { Component } from 'react';
import Block from '../common/Block';
import BlockItem from '../common/BlockItem';
import Button from '../common/Button';
import Input from '../common/Input';
import Template from '../common/Template';

export default class ThemeDatePage extends Component {
  render() {
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
      </Template>
    );
  }
}
