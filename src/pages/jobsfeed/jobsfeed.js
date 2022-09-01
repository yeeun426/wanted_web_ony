import React,{useState, useEffect} from 'react'
// 공통컴포넌트
import Header from '../../components/header';
import JobsSwiperComponent from '../../components/jobsSwiper';
import Footer from '../../components/footer';
import LoginModal from '../login/login';
import axios from 'axios';
//styled
import { MainContainerStyle, LineBannerStyle, JobsFeedStyle } from '../../components/styled';
//dummydata
import jobsfeed from '../../data/jobsfeed.json';

function JobsFeed() {
    const [modal, setModal] = useState(false);

    const JobsList = async() => {
        try {
          //응답 성공
          const response = await axios.get('https://prod.wook2.xyz/employment/themes/incentive');
        //   setJobDetail(response.data);
          console.log(response.data);
        } catch (error) {
          //응답 실패
          console.error(error);
        }
      }

    const positionList = jobsfeed.position.filter(jobsfeed => (jobsfeed.kind === "position"));
    const userList = jobsfeed.position.filter(jobsfeed => (jobsfeed.kind === "user"));
    
    const [bookmark,setBookmark] = useState([]);

    const BookMarkBtn = (e) => {
        jobsfeed.position[e.currentTarget.id-1].bookmark
        ? jobsfeed.position[e.currentTarget.id-1].bookmark = false
        : jobsfeed.position[e.currentTarget.id-1].bookmark = true

        jobsfeed.position.map((item)=>{
            if(jobsfeed.position[e.currentTarget.id-1].id === item.id) 
            setBookmark(item);
        console.log(jobsfeed.position)
        })
    }
    
    useEffect(() => {   
     }, [bookmark.like]);

    return(
        <JobsFeedStyle>
            <Header test={setModal} activeMenu="jobsfeed" />

            <JobsSwiperComponent/>

            <LineBannerStyle marginTop={60} marginBottom={60}>
                <svg id="searchSvg"viewBox="0 0 32 32"><path d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"></path></svg>
                <div>채용 중인 포지션 보러가기</div>
            </LineBannerStyle>
            {
                (function(){
                    if(sessionStorage.getItem('id') != undefined) return (
                        //로그인 성공
                        <MainContainerStyle width={250} height={188} paddingTop={1}>
                        <div className="mc-main-title">
                            <div className="mc-login-title">
                                <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="logo-wantedai" style={{marginBottom: "3px"}} />
                                <div>가 제안하는 합격률 높은 포지션</div>
                            </div>
            

                            <div className="mc-btn-sub">
                                <div>포지션으로 전체보기</div>
                                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                            </div>
                        </div>
            
                        <div className="mc-list">
                    {positionList.map((position)=>(
                        <div className="mc-containers">
                            <img src={position.image} alt="드림에이스"/>
                            <button id={position.id} className="bookmark-icon" onClick={BookMarkBtn}>
                                {!position.bookmark
                                ?<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                                :<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="rgb(51,102,255)"></path></svg>
                                }
                                </button>
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>{position.title}</div>
                                    <div className="jf-company-name">{position.info}</div>
                                    <span>{position.location}</span>
                                    <div className="jf-reward">{position.reward}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </MainContainerStyle>
                    ); else return (
                        <div className="match-banner">
                            <div className="mb-title">
                                <img id="mb-svg"alt="" src="data:image/png;base64,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"/>
                                <img id="mb-logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="170" alt="logo-wantedai"/>           
                            </div>
            
                            <div className="mb-info">
                                <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="114" alt="logo-wantedai" />
                                가 제안하는
                                합격률 높은 포지션
                                <svg width="24" height="24" className="MatchedJobList_questionMark__pcXLi" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fillRule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                            </div>
            
                            <div className="mb-recommend">
                                회원가입하면 포지션을 추천해드려요.
                            </div>
            
                            <button>지금 시작하기</button>
                        </div>
                    );
                })()
            }
            <div className="career-banner">
                <div className="cb-wrapper">
                    <div className="cb-container">
                        <div className="cb-txt">입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</div>
                        <button>지금 확인하기</button>
                    </div>
                    <img src="https://static.wanted.co.kr/career_connect/banner.png" alt="career-connect-banner" />
                </div>
            </div>

            {/* 이예은님~웅앵 */}
            {
                (function(){
                    if(sessionStorage.getItem('id') != undefined) return (
                        //로그인 성공
                        <MainContainerStyle width={250} height={188} paddingTop={1}>
                        <div className="mc-main-title">
                            <div className="mc-title">
                                <span>{sessionStorage.getItem('id')}</span>
                                <span>님 지금 바로 지원해볼까요?</span>
                            </div>
                        </div>
            
                        <div className="mc-list">
                        {userList.map((user)=>(
                        <div className="mc-containers">
                            <img src={user.image} alt="드림에이스"/>
                            <button id={user.id} className="bookmark-icon" onClick={BookMarkBtn}>
                            {!user.bookmark
                                ?<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                                :<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="rgb(51,102,255)"></path></svg>
                                }                           
                            </button>
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>{user.title}</div>
                                    <div className="jf-company-name">{user.info}</div>
                                    <span>{user.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            
                        {/* <div className="mc-containers">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5380%2Fvd2jueavxoxdrb5l__400_400.jpg&w=400&q=75" alt="플랜얼라이언스" />
                            <button className="bookmark-icon">
                                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                            </button>
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>(모던하우스) 반려동물용품 MD</div>
                                    <div className="jf-company-name">모던하우스(MH&Co.)</div>
                                    <span>서울.한국</span>
                                    <div className="jf-reward">채용보상금 1,000,000원</div>
                                </div>
                            </div>
                      </div>
            
                        <div className="mc-containers">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F13316%2Fnxitbyktz7r1pt1y__400_400.png&w=400&q=75" alt="플랜얼라이언스" />
                            <button className="bookmark-icon">
                                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                            </button>
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>HR Leader</div>
                                    <div className="jf-company-name">바잉스퀘어</div>
                                    <span>서울.한국</span>
                                    <div className="jf-reward">채용보상금 1,000,000원</div>
                                </div>
                            </div>
                        </div>
            
                        <div className="mc-containers">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2556%2Fact7w6bg6b0qcbuz__400_400.jpg&w=400&q=75" alt="플랜얼라이언스" />
                            <button className="bookmark-icon">
                                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                            </button>
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>[인스파이어디] 신입 기획자</div>
                                    <div className="jf-company-name">크레비스파트너스</div>
                                    <span>서울.한국</span>
                                    <div className="jf-reward">채용보상금 1,000,000원</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    </MainContainerStyle>
                    );
                })()
            }

            <div className="shortcut-navbar">
                <button className="sn-left">
                    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><defs><path d="M16.46 12.565c-.631.802-1.025 1.667-1.039 2.59-.02 1.45.793 2.538 2.286 3.154l.116.038c3.487.898 5.788 2.958 5.788 5.03l.014 1.226c0 .026-.194.188-.35.189H4.662c-.136 0-.274-.122-.274-.178l-.014-1.248c0-1.997 2.086-3.93 5.412-4.868a4.468 4.468 0 0 0 1.275-.538c.775-.474 1.316-1.135 1.448-2.014a.875.875 0 0 0-1.731-.259c-.044.292-.256.552-.629.779a2.898 2.898 0 0 1-.795.337c-4.04 1.137-6.73 3.632-6.73 6.573l.014 1.248c0 1.062.965 1.918 2.024 1.918h18.613c1.061-.003 2.099-.871 2.099-1.949l-.014-1.227c0-3.003-2.9-5.612-7.039-6.697-.825-.354-1.16-.816-1.15-1.49.006-.473.248-1.003.663-1.53.272-.346.545-.606.71-.736l.087-.08c1.233-1.29 2.03-3 2.03-4.666 0-3.648-3.053-6.709-6.692-6.709-3.639 0-6.692 3.061-6.692 6.709 0 1.57.443 2.914 1.357 4.048a.875.875 0 1 0 1.363-1.097c-.655-.813-.97-1.768-.97-2.951 0-2.682 2.27-4.959 4.942-4.959s4.941 2.276 4.941 4.959c0 1.162-.587 2.437-1.506 3.417-.258.211-.6.545-.944.981z" id="jobsfeed_shortcut_profile_a"></path></defs><g fill="none" fillRule="evenodd"><mask id="jobsfeed_shortcut_profile_b" fill="#fff"><use xlinkHref="#jobsfeed_shortcut_profile_a"></use></mask><use fill="#333" fillRule="nonzero" xlinkHref="#jobsfeed_shortcut_profile_a"></use><g mask="url(#jobsfeed_shortcut_profile_b)" fill="#333"><path d="M0 0h28v28H0z"></path></g></g></svg>                    
                    <div>내 프로필</div>
                </button>    
                <button className="sn-right">
                    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><defs><path d="M10.208 25.083a.875.875 0 0 1-.875-.875v-6.125h-1.75v6.125a.875.875 0 0 1-.875.875H2.042a.875.875 0 0 1-.875-.875V4.375c0-.483.391-.875.875-.875h12.833c.483 0 .875.392.875.875v3.791h9.625c.446 0 .814.334.868.766l.007.11v10.5a.875.875 0 0 1-1.75 0V9.917h-8.75v13.416h9.625a.875.875 0 0 1 0 1.75H10.208zM14 5.25H2.917v18.083h2.916v-6.125c0-.483.392-.875.875-.875h3.5c.484 0 .875.392.875.875v6.125H14V5.25zm4.375 10.792c.644 0 1.167.522 1.167 1.166v1.167a1.167 1.167 0 0 1-2.334 0v-1.167c0-.644.523-1.166 1.167-1.166zm0-4.667c.644 0 1.167.522 1.167 1.167v1.166a1.167 1.167 0 0 1-2.334 0v-1.166c0-.645.523-1.167 1.167-1.167zm-11.5 0a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333zm0-4.667a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333z" id="jobsfeed_shortcut_company_a"></path></defs><g fill="none" fillRule="evenodd"><mask id="jobsfeed_shortcut_company_b" fill="#fff"><use xlinkHref="#jobsfeed_shortcut_company_a"></use></mask><use fill="#333" fillRule="nonzero" xlinkHref="#jobsfeed_shortcut_company_a"></use><g mask="url(#jobsfeed_shortcut_company_b)" fill="#333"><path d="M0 0h28v28H0z"></path></g></g></svg>                
                    <div>매치업</div>
                </button>
            </div>

        <MainContainerStyle width={522} height={273} paddingTop={1}>
          <div className="mc-main-title">
            <div className="mc-title">
                #연봉이 최고의 복지
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=75&q=75" alt="user tag icon"/>
                <span>회사를 소개합니다</span>
            </div>
            <div className="mc-btn-sub">
              <div>포지션으로 더보기</div>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
          </div>

          <div className="mc-list">
            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4088%2Foueptcfbm51jzaj2__1080_790.jpg&w=520&q=100" alt="드림에이스"/>
                <div className="jf-items">
                    <div className="jf-info">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.00ae527f.jpg&w=42&q=100" alt="드림에이스" />
                        <div className='jf-name'>
                            <div>드림에이스</div>
                            <span>IT,컨텐츠</span>
                        </div>
                    </div>
                    <button>팔로우</button>
                </div>
            </div>

            <div className="mc-containers">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F18830%2F0wyacta9vnq5jy3t__1080_790.jpg&w=520&q=100" alt="플랜얼라이언스" />
              <div className="jf-items">
                <div className="jf-info">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.33f19e3f.jpg&w=42&q=100" alt="플랜얼라이언스"/>
                    <div className='jf-name'>
                        <div>플랜얼라이언스</div>
                        <span>IT, 컨텐츠</span>
                    </div>
                </div>
              <button>팔로우</button>
            </div>
          </div>
        </div>
        </MainContainerStyle>

        <MainContainerStyle width={522} height={273}>
          <div className="mc-main-title">
            <div className="mc-title">
                #유연근무
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=75&q=75" alt="user tag icon"/>
                <span>회사를 소개합니다</span>
            </div>
            <div className="mc-btn-sub">
              <div>포지션으로 더보기</div>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
          </div>

          <div className="mc-list">
            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7243%2Facvfwwg92pngui6a__400_400.jpg&w=400&q=75" alt="드림에이스"/>
                <div className="jf-items">
                    <div className="jf-info">
                        <img src="https://static.wanted.co.kr/images/wdes/0_5.72ab4308.jpg" alt="드림에이스" />
                        <div className='jf-name'>
                            <div>위밋플레이스</div>
                            <span>IT, 컴텐츠</span>
                        </div>
                    </div>
                    <button>팔로우</button>
                </div>
            </div>

            <div className="mc-containers">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F32368%2F2murjkd9tm9thbjn__1080_790.jpg&w=520&q=100" alt="플랜얼라이언스" />
              <div className="jf-items">
                <div className="jf-info">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.2fa7c0f9.jpg&w=42&q=100" alt="플랜얼라이언스"/>
                    <div className='jf-name'>
                        <div>그랑몬스터</div>
                        <span>기타 서비스업</span>
                    </div>
                </div>
              <button>팔로우</button>
            </div>
          </div>
        </div>
        </MainContainerStyle>
        <hr style={{width: "1060px", backgroundColor:"#ececec", height:"2px", border:"none"}}/>
        
        <MainContainerStyle width={520} height={300}>
          <div className="mc-main-title">
            <div className="mc-title">
                테마로 모아보는 요즘 채용
            </div>
          </div>

          <div className="mc-list">
            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F285_51123e93.jpg&w=520&q=100" alt="드림에이스"/>
                <div className='jf-name'>
                    <div className="jf-title">외국계 기업</div>
                    <span>다양한 사람들과 자유롭게 일할 수 있는 외국계 기업을 소개합니다.</span>
                </div>

                <div className="jf-company">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.f32ae494.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.f2c6a589.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.f78ebb6b.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.8235b05e.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.568317ca.png&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.a7ddbf73.png&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_81c09f18-75fb-4653-85f3-4b6545be0c31.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.1cd202f1.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.b2125797.jpg&amp;w=30&amp;q=70" alt="외국계 기업"/>
                </div>
            </div>

            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F261_8ecbc1ef.png&w=520&q=100" alt="플랜얼라이언스" />
                <div className='jf-name'>
                    <div className="jf-title">주말 3일! 주 4일 근무 기업</div>
                    <span>일과 삶의 균형을 찾을 수 있는 기업을 소개합니다.</span>
                </div>

                <div className="jf-company">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.b1b73caf.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>                    
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.f0138a77.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>               
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.20ea32dc.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e497f532.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.4f6eb613.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>     
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.68795a47.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.6b2374f0.png&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.b518db18.png&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.8f75d757.jpg&amp;w=30&amp;q=70" alt="주말 3일! 주 4일 근무 기업"/>
                </div>
          </div>
        </div>
        </MainContainerStyle>
        <hr style={{width: "1060px", backgroundColor:"#ececec", height:"2px", border:"none"}}/>

        <MainContainerStyle width={250} height={188}>
            <div className="mc-main-title">
                <div className="mc-title">
                    요즘 뜨는 포지션
                </div>
            </div>

            <div className="mc-list">
            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4577%2Fxgczowftiwmedkkc__400_400.jpg&w=400&q=75" alt="드림에이스"/>
                <button className="bookmark-icon">
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                </button>
                <div className="jf-items">
                    <div className='jf-name'>
                        <div>[ONiON] Web/App hybrid engineer (senior)</div>
                        <div className="jf-company-name">이지시스(엠블)</div>
                        <span>서울.한국</span>
                        <div className="jf-reward">채용보상금 1,000,000원</div>
                    </div>
                </div>
            </div>

            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5380%2Fvd2jueavxoxdrb5l__400_400.jpg&w=400&q=75" alt="플랜얼라이언스" />
                <button className="bookmark-icon">
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                </button>
                <div className="jf-items">
                    <div className='jf-name'>
                        <div>(모던하우스) 반려동물용품 MD</div>
                        <div className="jf-company-name">모던하우스(MH&Co.)</div>
                        <span>서울.한국</span>
                        <div className="jf-reward">채용보상금 1,000,000원</div>
                    </div>
                </div>
          </div>

            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F13316%2Fnxitbyktz7r1pt1y__400_400.png&w=400&q=75" alt="플랜얼라이언스" />
                <button className="bookmark-icon">
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                </button>
                <div className="jf-items">
                    <div className='jf-name'>
                        <div>HR Leader</div>
                        <div className="jf-company-name">바잉스퀘어</div>
                        <span>서울.한국</span>
                        <div className="jf-reward">채용보상금 1,000,000원</div>
                    </div>
                </div>
            </div>

            <div className="mc-containers">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2556%2Fact7w6bg6b0qcbuz__400_400.jpg&w=400&q=75" alt="플랜얼라이언스" />
                <button className="bookmark-icon">
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                </button>
                <div className="jf-items">
                    <div className='jf-name'>
                        <div>[인스파이어디] 신입 기획자</div>
                        <div className="jf-company-name">크레비스파트너스</div>
                        <span>서울.한국</span>
                        <div className="jf-reward">채용보상금 1,000,000원</div>
                    </div>
                </div>
            </div>
        </div>
        </MainContainerStyle>

        <Footer />
        {modal ? <LoginModal test={setModal} /> : null}

        </JobsFeedStyle>
    )
}

export default JobsFeed;