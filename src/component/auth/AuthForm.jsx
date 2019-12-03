import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginService from '../../service/LoginService';
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
  font-weight: 600;
  border-bottom: var(--border);
  padding-bottom: 0.75rem;
  width: 100%;
  color: var(--gray-8);

  &:focus {
    border-bottom: 1px solid var(--gray-6);
  }

  & + & {
    margin-top: 1.5rem;
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

const AuthForm = props => {
  const { type, history } = { ...props };
  const typeMap = { login: '로그인', register: '회원가입' };
  const text = typeMap[type];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = async e => {
    const req = await LoginService.executeJwtAuthentication(username, password);
    console.log(req.data);
    // const req = await LoginService.executeJwtBasicAuthentication(username, password);
    // const token = await req.data.jwt;
    // LoginService.login(username, token);
    // history.push('/content');
  };

  return (
    <AuthFormBlock>
      <form>
        <StyledInput type="text" placeholder="아이디" name="username" onChange={onChangeUsername} value={username} />
        <StyledInput type="text" placeholder="비밀번호" name="password" onChange={onChangePassword} value={password} />
      </form>
      <StyledButton fullWidth cyan onClick={onSubmit}>
        {text}
      </StyledButton>
      <Footer>{text === '로그인' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
