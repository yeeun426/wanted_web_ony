import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nameRecoilState } from "../../atoms/User";
import Header from '../../components/header';
import { PageWrap, TextMiddle } from '../../components/styled';

export default function HomePage() {
  // 외부 모듈
  const navigate = useNavigate();

  // Global State
  const nameState = useRecoilValue(nameRecoilState);

  return (
    <PageWrap>
      <Header page="home" />
      <IndexText>항상 {nameState}님을 응원합니다 !</IndexText>
    </PageWrap>
  );
}

const IndexText = styled(TextMiddle)`
  font-size: 30px;
  font-weight: 600;
`;