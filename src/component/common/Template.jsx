import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SideBar from './SideBar';

const AppTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    display: flex;
    margin-top: 48px;

    .sidebar {
      position: fixed;
      background: var(--white);
      border-right: var(--border);
      width: var(--sidebar-width);
      height: 100vh;
      left: 0;

      transition: left 0.5s;
    }
    .sidebar.active {
      left: calc(var(--sidebar-width) * -1);
    }
    .main {
      display: flex;
      flex-direction: column;
      overflow: auto;
      background: var(--gray-2);
      padding: 1rem;
      width: 100%;
      margin-left: var(--sidebar-width);

      transition: margin-left 0.5s;
    }
    .main.active {
      margin-left: 0rem;
    }
  }
`;

export default function Template({ children }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <AppTemplate>
      <Header onClick={onClick} />
      <div className="container">
        <div className={`sidebar ${open ? 'active' : ''}`}>
          <SideBar />
        </div>
        <div className={`main ${open ? 'active' : ''}`}>
          <div>{children}</div>
        </div>
      </div>
    </AppTemplate>
  );
}
