import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nameRecoilState } from "../../atoms/User";
import Header from '../../components/header';
import { HomeWrapper, TextMiddle } from '../../components/styled';

export default function HomePage() {
  // 외부 모듈
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75" alt="hamberger menu" style="width:17px;height:14px;object-fit:contain"></img>
    </HomeWrapper>
  );
}

const IndexText = styled(TextMiddle)`
  font-size: 30px;
  font-weight: 600;
`;