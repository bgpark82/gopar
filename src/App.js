import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './component/common/Header';

const AppTemplate = styled.div`
  .container {
    display: flex;

    .sidebar {
      background: var(--yellow-5);
    }
    .main {
      background: var(--cyan-5);
    }
  }
`;

function App() {
  return (
    <AppTemplate>
      <Header />
      <div className="container">
        <div className="sidebar">sidebar</div>
        <div className="main">main</div>
      </div>
    </AppTemplate>
  );
}

export default App;
