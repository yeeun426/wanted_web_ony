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
    <PageWrap>
      <Header page="login" />
      <LoginWrap>
        <div
          style={{ fontSize: "25px", fontWeight: "600", marginBottom: "40px" }}
        >
          로그인
        </div>
        <div
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}
        >
          닉네임
        </div>
        <InputWrap
          value={name}
          onChange={handleName}
          placeholder="닉네임을 입력해주세요."
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </LoginWrap>
    </PageWrap>
  );
}

const LoginWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 40px;

  border: 1px solid gray;
`;

const InputWrap = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 60px;
`;

const LoginButton = styled.div`
  width: 100%;
  padding: 14px 0px;

  border-radius: 6px;

  background-color: rgb(59, 105, 246);

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;

  cursor: pointer;
`;
