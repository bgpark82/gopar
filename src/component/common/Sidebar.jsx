import React from 'react';
import styled from 'styled-components';

const SidebarBlock = styled.div`
  background: var(--yellow-4);
  width: 10rem;

  position: absolute;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarBlock>
      <ul>
        <li>1</li>
        <li>1</li>
      </ul>
    </SidebarBlock>
  );
};

export default Sidebar;
