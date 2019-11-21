import React from 'react';
import styled from 'styled-components';

const TableBlock = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  tr {
    border-bottom: var(--border);
  }

  thead {
    th {
      padding: 0.5rem;
    }
  }

  tbody {
    tr {
      &:hover {
        background: var(--gray-1);
      }
      td {
        height: 2rem;
        padding: 0 0.5rem;
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
