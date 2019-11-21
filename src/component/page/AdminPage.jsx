import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from '../../../node_modules/axios/index';
import Block from '../common/Block';
import BlockItem from '../common/BlockItem';
import Input from '../common/Input';
import Table from '../common/Table';
import Template from '../common/Template';

const AdminBlock = styled.div``;

export default class AdminPage extends Component {
  state = {
    dummy: [],
  };

  componentDidMount = async () => {
    const req = await Axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ dummy: req.data });
    console.log(this.state.dummy);
  };

  render() {
    const thead = ['검색', '이름', '나이', '성별', '전화번호', '주소'];
    const { dummy } = { ...this.state };
    return (
      <Template>
        <AdminBlock>
          admin
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
            <BlockItem label="검색조건">
              <Input />
            </BlockItem>
          </Block>
          <Block>
            <Table head={thead}>
              {dummy.map((td, index) => (
                <tr key={index}>
                  <td>{td.id}</td>
                  <td>{td.name}</td>
                  <td>{td.username}</td>
                  <td>{td.email}</td>
                  <td>{td.phone}</td>
                  <td>{td.website}</td>
                </tr>
              ))}
            </Table>
          </Block>
        </AdminBlock>
      </Template>
    );
  }
}
