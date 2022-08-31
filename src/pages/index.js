import React,{useEffect, useState} from 'react';
//styled components
import {CreatorBannerStyle, CareerInsightStyle, RecruitmentStyle, SubscribeStyle, MainContainerStyle, LineBannerStyle} from '../components/styled';
//components
import Header from '../components/header';
import SwiperComponent from '../components/swiper';
import Footer from '../components/footer';
import LoginModal from './login/login';
// dummydata 
import home from '../data/home.json'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
// import "swiper/scss";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import axios from 'axios';
// import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay])	


export default function IndexPage() {
  const [modal, setModal] = useState(false);
  const [insight, setInsight] = useState([]);

  console.log(modal);

  const NeededInsight = async() => {
    try {
      //응답 성공
      setInsight(null);
      const response = await axios.get('https://prod.wook2.xyz/insights', {
        params: {
          tagId:1
        }
      });
      setInsight(response.data.result.insights);
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    NeededInsight();

  }, [])

  console.log(insight);
  console.log(home)
  return (
    <div>
      <div>
        <Header test={setModal} page="index" />
        <SwiperComponent swiperCategory = "home" />
        
        <CareerInsightStyle>
          <div className="ci-title">
            <div>나에게 필요한 커리어 인사이트</div>
            <svg width="24" height="24" className="" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fillRule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
          </div>

          <div className='ci-swiper'>
            <Swiper
              slidesPerView={7.5}
              spaceBetween={15}
              slidesPerGroup={2}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <button>
                  전체
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  회사생활
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  취업/이직
                </button>
              </SwiperSlide>
              
              <SwiperSlide>
                <button>
                  커리어고민
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  조직문화
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  라이프스타일
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  IT/기술
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  브랜딩
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  데이터
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  콘텐츠 제작
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  노무
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  HR
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  디자인
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  마케팅
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  MD
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  경영/전략
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  서비스기획
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  개발
                </button>
              </SwiperSlide>

              <SwiperSlide>
                <button>
                  UI/UX
                </button>
              </SwiperSlide>
            </Swiper>

            <div className='ci-etc'>
              <button>
                <svg width="16" height="3" viewBox="0 0 16 3"><path fillRule="evenodd" clipRule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z" fill="currentColor"></path></svg>
              </button>
            </div>
          </div>

          <MainContainerStyle width={250} height={170} fontsize={16} widthtotal={1080} paddingTop={1}>
            <div className="mc-list" style={{flexWrap: "wrap"}}>
            
            {Array.isArray(insight)
              ? insight.map((api)=>(
                <div key={api.insight_id}>
                  {home.insight.map((insight)=>(
                    <div id="true">
                      {api.insight_id === insight.id
                      ?
                        <div className="mc-containers" key={insight.id} onClick={() => window.open(api.insight_url, '_blank')}>
                          <img src={insight.image} alt={insight.title} />            
                          <div className="ci-info">{insight.title}</div>
                          <span className="ci-subinfo">{insight.info}</span>
                          <div className='ci-writer'>
                            <img src={insight.writeImg} alt="brunch" />
                            <div>{insight.writeName}</div>
                          </div>
                        </div>
                      : null}
                    </div>
                  ))}
                </div>
              ))
            :null
            }
            </div>
          </MainContainerStyle>
        </CareerInsightStyle>

        <CreatorBannerStyle>
          <div className="cb-container">
            <div className="cb-title">
              <div>
                즐겨보는
                <span> 크리에이터의 </span>
                글도 추천하고 싶다면?
              </div>

              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=121&amp;q=75" alt="크리에이터 추천하기" />
            </div>
            <button>
              크리에이터 추천하기
            </button>
          </div>
        </CreatorBannerStyle>

        <MainContainerStyle width={250} height={170} fontsize={16}>
          <div className="mc-main-title">
            <div className="mc-title">3분만에 읽는 Wanted+ 아티클</div>
            <div className="mc-btn-sub">
              <div>아티클 전체보기</div>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
          </div>

          <div className="mc-list">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            navigation={true}
            className="articleSwiper">

          {home.article.map((article)=>(
            <SwiperSlide>
            <div className="mc-containers" key={article.id}>
              <img src={article.image} alt={article.title} />            
              <div className="mc-info">{article.title}</div>
              <span style={{color:"black", fontFamily:"Pretendard-Thin"}}>{article.info}</span>
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
          </div>
        </MainContainerStyle>
        <hr style={{width: "1060px", backgroundColor:"#ececec", height:"2px", border:"none"}}/>
        <MainContainerStyle width={250} height={170} fontsize={14}>
          <div className="mc-main-title">
            <div className="mc-title">직장인을 위한 Wanted+ VOD</div>
            <div className="mc-btn-sub">
              <div>VOD 전체보기</div>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
          </div>
          
          <div className="mc-list">
            {home.VOD.map((vod)=>(
                <div className="mc-containers" key={vod.id}>
                  <img src={vod.image} alt={vod.title} />            
                  <div className="mc-info">{vod.title}</div>
                  <div className="mc-card">{vod.info}</div>
                  <span>{vod.subinfo}</span>
                </div>
            ))}
          </div>
        </MainContainerStyle>

        <LineBannerStyle>
          <div>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</div>
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
        </LineBannerStyle>

        <MainContainerStyle width={522} height={273}>
          <div className="mc-main-title">
            <div className="mc-title">커리어 성장을 위한 맞춤 이벤트</div>
            <div className="mc-btn-sub">
              <div>이벤트 전체보기</div>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
          </div>

          <div className="mc-list">
            <div className="mc-containers">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2125%2Fe0212780.jpg&amp;w=1200&amp;q=100" alt="일 잘-하는 마케터의 팔로잉 리스트" />
              <div className="mc-subinfo">아티클</div>
              <div>일 잘-하는 마케터의 팔로잉 리스트</div>
            </div>

            <div className="mc-containers">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2207%2Fca78caa5.jpg&amp;w=1200&amp;q=100" alt="원티드매거진, 신청만 하면 누구나 다운로드 가능!" />
              <div className="mc-subinfo">아티클</div>
              <div>원티드매거진, 신청만 하면 누구나 다운로드 가능!</div>
            </div>
          </div>
        </MainContainerStyle>

        <SubscribeStyle>
          <div className="subscribe-container">
            <div>
              <div className="subscribe-title">
                <svg viewBox="0 0 160 31"><path d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z" fill="#000000"></path></svg>
                <div>구독해야 하는 이유</div>
              </div>
              <div className="subscribe-sub">구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</div>
              <div>
                <button>첫 구독 0원 신청하기</button>
              </div>
            </div>

            <div>
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&amp;w=800&amp;q=90" alt="wantedplus" height="158" loading="lazy" />
            </div>
          </div>
        </SubscribeStyle>

        <RecruitmentStyle>
          <div className="recruit-title">채용 정보를 찾고 계셨나요?</div>
          <div className="recruit-container">
            <div className="recruit-items">
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 32 32"><path d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"></path></svg>
              <div className="recruit-sub">
                <span>채용공고</span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </div>
            </div>

            <div className="recruit-items">
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 32 32"><path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path></svg>
              <div className="recruit-sub">
                <span> 프로필</span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </div>
            </div>

            <div className="recruit-items">
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 32 32"><path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path></svg>
              <div className="recruit-sub">
                <span>매치업</span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </div>
            </div>

            <div className="recruit-items">
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 32 32"><path d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"></path></svg>
              <div className="recruit-sub">
                <span>직군별 연봉</span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </div>
            </div>

          </div>
        </RecruitmentStyle>

        <Footer />
      </div>
      {modal ? <LoginModal test={setModal} /> : null}
    </div>
  );
}

