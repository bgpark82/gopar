import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginService from '../../service/LoginService';
import Button from './Button';

const HeaderBlock = styled.div`
  background: var(--white);
  border-bottom: var(--border);
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const Wrapper = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;

  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.5px;

    .logo {
      font-size: 1.2rem;
      color: var(--gray-7);
      display: flex;
      align-items: center;
    }

    .hamburger {
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        font-size: 1.2rem;
      }
    }
  }
`;

const Header = ({ onClick, history }) => {
  const onLogout = () => {
    LoginService.logout();
    history.push('/');
  };

  return (
    <HeaderBlock>
      <Wrapper>
        <div className="left">
          <div className="logo">
            <Link to="/">GOPAR</Link>
          </div>
          <div className="hamburger" onClick={onClick}>
            <FiMenu />
          </div>
        </div>
        <div className="right">
          <Button onClick={onLogout}>로그아웃</Button>
        </div>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
