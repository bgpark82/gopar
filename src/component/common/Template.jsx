import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SideBar from './SideBar';

const AppTemplate = styled.div`
  .container {
    position: relative;

    .sidebar {
      background: var(--white);
      border-right: var(--border);
      position: fixed;
      height: 100%;
      width: var(--sidebar-width);
      left: 0rem;

      transition: all 0.5s;
    }
    .sidebar.active {
      left: calc(var(--sidebar-width) * -1);
    }
    .main {
      background: var(--gray-2);
      position: fixed;
      height: 100%;
      left: var(--sidebar-width);
      right: 0rem;

      transition: left 0.5s;
    }
    .main.active {
      left: 0rem;
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
      <Header />
      <div className="container">
        <div className={`sidebar ${open ? 'active' : ''}`}>
          <SideBar />
        </div>
        <div className={`main ${open ? 'active' : ''}`}>
          <div onClick={onClick}>{children}</div>
        </div>
      </div>
    </AppTemplate>
  );
}
