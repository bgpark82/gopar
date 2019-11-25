import React, { useState, useRef } from 'react';
import { FiBox } from 'react-icons/fi';

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
  const openRef = useRef();
  console.log(openRef);

  const onClick = e => {
    console.log(e.target);
    setOpen(!open);
    console.log(open);
  };

  return (
    <SideBarBlock>
      <ul>
        <List children="유저 목록" icon={<FiBox />} onClick={onClick} />
        <List children="관리자 목록" icon={<FiBox />} onClick={onClick} />
        <SubListBlock open={open} ref={openRef}>
          <SubList children="관리자 페이지" link="/admin/page" />
        </SubListBlock>
        <List children="테마 목록" icon={<FiBox />} onClick={onClick} />
        <SubListBlock open={open}>
          <SubList children="장소별 테마입력" link="/theme/place" />
        </SubListBlock>
        <List children="POI 목록" icon={<FiBox />} onClick={onClick} />
        <List children="회원 목록" icon={<FiBox />} onClick={onClick} />
      </ul>
    </SideBarBlock>
  );
};

export default SideBar;
