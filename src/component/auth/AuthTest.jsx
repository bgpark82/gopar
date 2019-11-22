import React from 'react';
import styled from 'styled-components';

const AuthBlock = styled.div`
  background: var(--cyan-4);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    background: var(--white);
    width: 40vh;
    height: 50vh;
  }
`;

const AuthTest = props => (
  <AuthBlock>
    <div className="container">{props.children}</div>
  </AuthBlock>
);

export default AuthTest;
