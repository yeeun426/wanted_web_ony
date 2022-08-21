import React from 'react'
import styled from 'styled-components';
import icon from '../imgs/icon.JPG';

export default function Header({ page }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItem>
          <img id="homeMenu" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamberger menu" style={{width:"17px", height: "14px", objectFit:"contain"}} />
          <img src={icon} alt="icon" style={{height:"17px"}}/>
        </HeaderItem>

        <HeaderItem>
          <div className="menuList">채용</div>
          <div className="menuList">이벤트</div>
          <div className="menuList">직군별 연봉</div>
          <div className="menuList">이력서</div>
          <div className="menuList">커뮤니티</div>
          <div className="menuList">프리랜서</div>
          <div className="menuList">AI 합격예측</div>
        </HeaderItem>

        <HeaderItem>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path><g fill="none" fill-rule="evenodd"></g></svg>
            <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"></path></svg>
            <div className="mypage"style={{backgroundImage:"url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png)"}}></div>
            <div id="boundary">|</div>
            <div id="companyService">기업 서비스</div>
          </div>
        </HeaderItem>
      </HeaderContainer>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #e1e2e3;
  
  #homeMenu{
    margin-right: 15px;
  }
  .mypage{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;

  .menuList {
    font-size: 14px;
    padding: 15px;
    font-weight: 500;
  }

  svg{
    padding: 0 10px;
  }

  #companyService{
    font-size: 13px;
    color: #666;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 6px 10px;
    margin-left: 15px;
    font-weight: 400;
  }

  #boundary{
    margin: auto 10px;
    font-size: 12px;
    color: #e1e2e3;
  }
`;

const HeaderContainer = styled.div`
  width: 1060px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
