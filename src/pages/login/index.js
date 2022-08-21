import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { nameRecoilState } from "../../atoms/User";
import Header from '../../components/header';
import { PageWrap } from '../../components/styled';

export default function LoginPage() {
  // 외부 모듈
  const navigate = useNavigate();

  // Local State
  const [name, setName] = useState("");

  // Global State
  const setNameState = useSetRecoilState(nameRecoilState);

  //name 셋팅
  const handleName = (e) => {
    setName(e.target.value);
  };

  //로그인 버튼 클릭
  const handleLogin = () => {
    //벨리데이션
    if (!name) {
      alert("닉네임을 입력해주세요");
      return;
    }

    //서버통신 코드 작성

    // 전역 State 값 세팅
    setNameState(name);

    //페이지 이동
    navigate("/home");
  };

  return (
    <div>

    </div>
  );
}