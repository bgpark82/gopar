import React from 'react';
import styled from 'styled-components';

const BlockBlock = styled.div`
  display: flex;
  align-items: flex-start; /* align block-item top */
  flex-wrap: wrap;
  overflow: auto; /* prevent from table overflow */

  background: var(--white);
  border: var(--border);
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  height: 100%;
  width: 100%;
`;

const Block = ({ children }) => {
  return <BlockBlock>{children}</BlockBlock>;
};

export default Block;
