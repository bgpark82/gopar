import React from 'react';
import styled from 'styled-components';

const BlockBlock = styled.div`
  background: var(--white);
  border: var(--border);
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  overflow: auto;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Block = ({ children }) => {
  return <BlockBlock>{children}</BlockBlock>;
};

export default Block;
