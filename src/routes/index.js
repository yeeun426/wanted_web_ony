import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages';
import JobsPage from '../pages/jobsfeed/jobsfeed';
import NoMatchPage from '../pages/noMatch';
import TagSearch from '../pages/search/tagsearch'
import Company from '../pages/company'
export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 루트페이지 */ }
        <Route path="/" element={<IndexPage />} key="index" />

        {/* 추가되는 페이지 */}
        <Route path="/jobsfeed" element={<JobsPage />}  key="jobsfeed" />
        <Route path="/tagsearch" element={<TagSearch />}  key="tagsearch" />
        <Route path="/company" element={<Company />}  key="company" />

        {/* 경로가 유효하지 않을 때 */}
        <Route path="*" element={<NoMatchPage />} key="noMatch" />
      </Routes>
    </BrowserRouter>
  );
}
