import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: var(--gray-8);
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: var(--border);
  padding-bottom: 0.5rem;
  width: 100%;
  color: var(--gray-8);

  &:focus {
    border-bottom: 1px solid var(--gray-6);
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: var(--gray-6);
    text-decoration: underline;
    &:hover {
      color: var(--gray-9);
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = ({ type }) => {
  const typeMap = { login: '로그인', register: '회원가입' };
  const text = typeMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput type="text" placeholder="아이디" />
        <StyledInput type="text" placeholder="비밀번호" />
        <StyledButton fullWidth cyan>
          {text}
        </StyledButton>
      </form>
      <Footer>
        {text === '로그인' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
