import React, { Component } from 'react';
import styled from 'styled-components';
import Template from '../common/Template';

const AdminBlock = styled.div`
  .main {
    display: flex;
  }
`;

export default class AdminPage extends Component {
  render() {
    return (
      <Template>
        <AdminBlock>admin</AdminBlock>
      </Template>
    );
  }
}
