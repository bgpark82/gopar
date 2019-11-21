import React from 'react';
import styled from 'styled-components';

const TableBlock = styled.table`
  width: 100%;

  thead {
    border-bottom: var(--border);
  }

  tbody {
    text-align: center;
    tr {
      &:hover {
        background: var(--gray-1);
      }
      td {
        height: 2rem;
      }
    }
  }
`;

const Table = ({ ...props }) => {
  const { head, children } = { ...props };

  return (
    <TableBlock>
      <thead>
        <tr>
          {head.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </TableBlock>
  );
};

export default Table;
