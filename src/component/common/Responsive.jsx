import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  background: var(--cyan-4);
  padding: 0 1rem;
  margin: 0 auto;
  width: 1024px;

  @media (max-width: 1025px) {
    width: 786px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => (
  <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
);

export default Responsive;
