import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../imgs/icon.JPG';
import Search from '../components/search';

export default function Header(props) {
  const {test} = props;
  const [search, setSearch] = useState(false);
   
  const [activeMenu, setactiveMenu] = useState(props);

  console.log('현재 활성화된 메뉴 : ', activeMenu);

  return (
    <HeaderWrapper>
      {!search ?
      <HeaderContainer>
        <HeaderItem>
          <img id="homeMenu" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamberger menu" style={{width:"17px", height: "14px", objectFit:"contain"}} />
          
          <Link to ="/">
            <button>
              <img src={icon} alt="icon" style={{height:"17px"}}/>
            </button>
          </Link>
        </HeaderItem>

        <HeaderItem>
          <Link to = "/jobsfeed" className={activeMenu.activeMenu === 'jobsfeed'? "focused" : "link"}>
            <button className="menuList">채용</button>
          </Link>
          <button className="menuList">이벤트</button>
          <button className="menuList">직군별 연봉</button>
          <button className="menuList">이력서</button>
          <button className="menuList">커뮤니티</button>
          <button className="menuList">프리랜서</button>
          <button className="menuList">AI 합격예측</button>
        </HeaderItem>

        <HeaderItem>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={()=>setSearch(true)}>
              <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path><g fill="none"></g></svg>
            </button>
            <button onClick={()=>test(true)}>회원가입/로그인</button>
            <div id="boundary">|</div>
            <div id="companyService">기업 서비스</div>
          </div>
        </HeaderItem>
      </HeaderContainer>
      : <Search/>}
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 100;
  width: 100%;
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

  .focused{
    height: 100%;
    box-shadow: inset 0 -2px #258bf7;
  }

  .menuList {
    font-size: 14px;
    padding: 17px 15px;
    font-weight: 500;
    height: 100%;
  }

  .menuList:hover {
    box-shadow: inset 0 -2px #ddd;    
    height: 100%;
  }
  
  svg{
    padding: 3px 6px 0;
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

  button{
    border: none;
    background-color: transparent;
    font-family: "pretendard";
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  height: 100%;
  width: 1060px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  display: ${({ search }) => search ? 'none' : 'display'};
`;
