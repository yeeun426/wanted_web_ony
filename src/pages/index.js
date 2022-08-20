import React from 'react'
import styled from 'styled-components';
import Header from '../components/header';
import { PageWrap, TextMiddle } from '../components/styled';

export default function IndexPage() {
  return (
    <PageWrap>
      <Header page="index" />
      <IndexText>컴공선배 리액트 템플릿 입니다.</IndexText>
    </PageWrap>
  );
}


const IndexText = styled(TextMiddle)`
  font-size: 30px;
  font-weight: 600;
`;