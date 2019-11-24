import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubListBlock = styled.li`
  padding: 0.5rem 3rem;
  &:hover {
    background: var(--gray-3);
  }
`;

const SubList = ({ ...props }) => {
  const { children, link } = { ...props };
  console.log(link);

  return (
    <Link to={link}>
      <SubListBlock>{children}</SubListBlock>
    </Link>
  );
};
export default SubList;
