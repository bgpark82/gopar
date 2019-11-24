import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SideBar from './SideBar';

const AppTemplate = styled.div`
  /* header, container*/
  display: flex;
  flex-direction: column; /* header + container */
  min-height: 100vh; /* main height */

  .container {
    /* sidebar, main */
    display: flex;
    margin-top: 48px; /* header height */

    .sidebar {
      position: fixed;
      left: 0;
      height: 100vh; /* sidebar height */
      background: var(--white);
      border-right: var(--border);
      width: var(--sidebar-width);

      transition: left 0.5s;
    }
    .sidebar.active {
      left: calc(var(--sidebar-width) * -1);
    }
    .main {
      display: flex;
      flex-direction: column;
      overflow: auto; /* fit block in main */
      width: 100%;
      background: var(--gray-2);
      padding: 1rem;
      margin-left: var(--sidebar-width);

      transition: margin-left 0.5s;
    }
    .main.active {
      margin-left: 0rem;
    }
  }
`;

export default function Template({ children, history }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <AppTemplate>
      <Header onClick={onClick} history={history} />
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
