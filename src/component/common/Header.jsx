import React from 'react';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import Button from './Button';

const HeaderBlock = styled.div`
  background: var(--white);
  border-bottom: var(--border);
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;

  height: 3rem;
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
    .hamburger {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <div className="left">
          <div className="logo">Citus</div>
          <div className="hamburger">
            <FiMenu />
          </div>
        </div>
        <div className="right">
          <Button>로그인</Button>
        </div>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
