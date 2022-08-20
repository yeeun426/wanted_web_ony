import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import NoMatchPage from '../pages/noMatch';

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 루트페이지 */}
        <Route path="/" element={<IndexPage />} key="index" />

        {/* 추가되는 페이지 */}
        <Route path="/home" element={<HomePage />}  key="home" />
        <Route path="/login" element={<LoginPage />} key="login" />

        {/* 경로가 유효하지 않을 때 */}
        <Route path="*" element={<NoMatchPage />} key="noMatch" />
      </Routes>
    </BrowserRouter>
  );
}
