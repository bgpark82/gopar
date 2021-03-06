import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from '../../../node_modules/axios/index';
import Block from '../common/Block';
import BlockItem from '../common/BlockItem';
import Input from '../common/Input';
import Pagination from '../common/Pagination';
import Select from '../common/Select';
import Table from '../common/Table';
import Template from '../common/Template';
import TextArea from '../common/TextArea';

const AdminBlock = styled.div`
  .pagination {
    margin: 0 auto;
  }
`;

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
              <Select options={['전체', '가족', '부부', '학생', '커플']} />
            </BlockItem>
          </Block>
          <Block>
            <BlockItem label="글쓰기">
              <TextArea />
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
            <div className="pagination">
              <Pagination li={[1, 2, 3, 4, 5]} />
            </div>
          </Block>
        </AdminBlock>
      </Template>
    );
  }
}
