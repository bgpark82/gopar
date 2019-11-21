import React from 'react';
import styled from 'styled-components';

const PaginationBlock = styled.ul`
  display: flex;
  border-radius: 4px;
  border: var(--border);
  background: var(--white);
  li {
    border-collapse: collapse;
    padding: 0.25rem 0.75rem;
    border-right: var(--border);
  }
`;

const Pagination = ({ ...props }) => {
  return (
    <PaginationBlock>
      <li>></li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>></li>
    </PaginationBlock>
  );
};

export default Pagination;
