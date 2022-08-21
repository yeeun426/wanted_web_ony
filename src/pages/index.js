import React from 'react'
import styled from 'styled-components';
import Header from '../components/header';
import Swiper from '../components/swiper';

export default function IndexPage() {
  return (
    <div>
      <Header page="index" />
      <Swiper />
      <div>컴공선배 리액트 템플릿 입니다.</div>
    </div>
  );
}

