import React, { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import styled, { css } from 'styled-components';
import List from './List';
import SubList from './SubList';

const SideBarBlock = styled.div`
  padding-top: 0.5rem;
`;

const SubListBlock = styled.ul`
  display: none;
  ${props =>
    props.open &&
    css`
      display: block;
    `}
`;

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <SideBarBlock>
      <ul>
        <List children="유저 목록" arrow={<IoIosArrowBack />} icon={<FiBox />} onClick={onClick} />
        <SubListBlock open={open}>
          <SubList children="유저 관리" />
          <SubList children="유저 목록" />
          <SubList children="유저 입력" />
        </SubListBlock>
        <List children="관리자 목록" arrow={<IoIosArrowBack />} icon={<FiBox />} onClick={onClick} />
        <SubListBlock open={open}>
          <SubList children="유저 관리" />
          <SubList children="유저 목록" />
          <SubList children="유저 입력" />
        </SubListBlock>
        <List children="테마 목록" arrow={<IoIosArrowBack />} icon={<FiBox />} />
        <List children="POI 목록" arrow={<IoIosArrowBack />} icon={<FiBox />} />
        <List children="회원 목록" arrow={<IoIosArrowBack />} icon={<FiBox />} />
      </ul>
    </SideBarBlock>
  );
};

export default SideBar;
