import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  background: var(--gray-2);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WhiteBox = styled.div`
  background: var(--white);
  width: 360px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.02);
  padding: 2rem;
  border-radius: 3px;

  .logo-area {
    font-weight: bold;
    text-align: center;
    color: var(--gray-8);
    letter-spacing: 1px;
    padding-bottom: 2rem;
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">CITUS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
