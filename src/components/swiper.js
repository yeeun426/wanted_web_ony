import React from "react";
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay])	

function swiper() {
    return(
        <SwiperWrapper>
            <Swiper
                slidesPerView={1.44}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                // autoplay={{
                // delay: 5000,
                // disableOnInteraction: false
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1786%2F2441afc4.jpg&amp;w=1060&amp;q=100" alt="프리온보딩 프론트엔드 코스" />
                        <div className="slideDetails">
                            <h2>프리온보딩 프론트엔드 코스</h2>
                            <h3>기초 역량이 아닌 실전 역량과 취업을 목표로</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1787%2F7d004e7e.jpg&amp;w=1060&amp;q=100" alt="프리온보딩 백엔드 코스"/>
                        <div className="slideDetails">
                            <h2>프리온보딩 백엔드 코스</h2>
                            <h3>기업의 실제 채용 과제로 구성된 커리큘럼</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&amp;w=1060&amp;q=100" alt="우리 회사를 소개합니다." />
                        <div className="slideDetails">
                            <h2>우리 회사를 소개합니다.</h2>
                            <h3>'회사'에 대한 정보, 원티드가 찾아드릴게요!</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1776%2F89e208e3.jpg&amp;w=1060&amp;q=100" alt="합격하는 마케터들의 3가지 공통점" />
                        <div className="slideDetails">
                            <h2>합격하는 마케터들의 3가지 공통점</h2>
                            <h3>자소서 삼백 번 고쳐도 서류 합격률이 낮다면!</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1780%2Fa307601f.jpg&amp;w=1060&amp;q=100" alt="파이썬 개발자 커리어 로드맵" />
                        <div className="slideDetails">
                            <h2>파이썬 개발자 커리어 로드맵</h2>
                            <h3>파이썬 전문가가 되고 싶다면?</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1781%2F37d443e2.jpg&amp;w=1060&amp;q=100" alt="커리어 고민있는 데이터 직군!" />
                        <div className="slideDetails">
                            <h2>커리어 고민있는 데이터 직군!</h2>
                            <h3>야놀자 김영진님과 밋업에서 만나요</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1789%2F7ffde204.jpg&amp;w=1060&amp;q=100" alt="개발자를 위한 포트폴리오" />
                        <div className="slideDetails">
                            <h2>개발자를 위한 포트폴리오</h2>
                            <h3>지금 모임을 신청하세요!</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1788%2F8a425eda.jpg&amp;w=1060&amp;q=100" alt="선택이 아닌 필수 TypeScript" />
                        <div className="slideDetails">
                            <h2>선택이 아닌 필수 TypeScript</h2>
                            <h3>총상금 300만원, 프리온보딩 프론트엔드 챌린지</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>                
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1774%2F417c4773.jpg&amp;w=1060&amp;q=100" alt="당신의 영감이 되는 곳 '코사이어티'" />
                        <div className="slideDetails">
                            <h2>당신의 영감이 되는 곳 '코사이어티'</h2>
                            <h3>일하는 공간, 설계, 브랜딩에 대하여</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1790%2Fd4b41ce4.jpg&amp;w=1060&amp;q=100" alt="iF와 함께하는 디자인 토크/네트워킹" />
                        <div className="slideDetails">
                            <h2>iF와 함께하는 디자인 토크/네트워킹</h2>
                            <h3>iF x Wanted Gathering Seoul 2022</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>           
        </SwiperWrapper>
    )
}

export default swiper;

const SwiperWrapper = styled.div`
    padding-top: 25px;

    .swiper-slide-active{
        .slideDetails{
            display: block;
        }
    }

    .swiper-slide-prev, .swiper-slide-next{
        .slideDetails{
            display: none;
        }
    }

    .slideDetails{
        position: absolute;
        bottom: 28px;
        width: 330px;
        height: 146px;
        border-radius: 4px;
        background-color: #fff;
        text-align: left;
        left: 34px;

        span{
            font-size: 14px;
            font-weight: 700;
            line-height: 1;
            color: #36f;
        }
        svg{
            fill: #36f;
        }
        
    }

    .mySwiper {
        text-align: center;
    }

    .swiper-button-prev {
        left: calc((100% - 1210px)/2);
        color: transparent;
        background-color: #fff;
        opacity: .5;
        border-radius: 15px;
        height: 60px;
        top: 47%;
    }

    .swiper-button-next {
        right: calc((100% - 1200px)/2);
        color: transparent;
        background-color: #fff;
        opacity: .5;
        border-radius: 15px;
        height: 60px;
        top: 47%;
    }

    img{
        border-radius: 4px;
    }

    h3 {
        height: 44px;
    }
`;

