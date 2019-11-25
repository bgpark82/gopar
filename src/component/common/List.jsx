import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const ListBlock = styled.li`
  color: var(--gray-9);
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.8rem;
  cursor: pointer;

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
  const { children, icon, onClick } = { ...props };

  return (
    <ListBlock onClick={onClick}>
      <div className="left">
        <div className="icon">{icon}</div>
        <div className="text">{children}</div>
      </div>
      <div className="arrow">
        <IoIosArrowBack />
      </div>
    </ListBlock>
  );
};
export default List;
