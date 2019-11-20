import React, { Component } from 'react';
import styled from 'styled-components';

const AdminBlock = styled.div`
  .main {
    display: flex;
  }
`;

export default class AdminPage extends Component {
  render() {
    return <AdminBlock></AdminBlock>;
  }
}
