import React from 'react';
import styled from 'styled-components';

const ListBlock = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.8rem;

  &:hover {
    background: var(--gray-1);
  }

  .left {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 0.3rem;
    }
  }
`;

const List = ({ ...props }) => {
  const { children, arrow, icon, onClick } = { ...props };

  return (
    <ListBlock onClick={onClick}>
      <div className="left">
        <div className="icon">{icon}</div>
        <div className="text">{children}</div>
      </div>
      <div className="arrow">{arrow}</div>
    </ListBlock>
  );
};
export default List;
