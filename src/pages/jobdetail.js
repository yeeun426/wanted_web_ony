import React,{useEffect, useState} from 'react';
import {JobDetailStyles, MainContainerStyle} from '../components/styled';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination])	

export default function JobDetail(){
    const [jobDetail, setJobDetail] = useState([]);

    const JobDetailInfo = async() => {
        try {
          //응답 성공
          const response = await axios.get('https://prod.wook2.xyz/employment/1');
          setJobDetail(response.data);
          console.log(response);
        } catch (error) {
          //응답 실패
          console.error(error);
        }
      }

      useEffect(() => {
        JobDetailInfo();
      }, [])

    return(
        <JobDetailStyles>
            <Header />
            <div className="job-detail-wrapper">
            <div className="jdw-left-container">

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
            {Array.isArray(jobDetail.image)
            && jobDetail.image.map((image)=>(
            <SwiperSlide>
                <img src={image.imageUrl} alt="알체라 - Frontend Engineer(AI플랫폼 서비스 Web 개발)"/>
            </SwiperSlide>      
            ))}
            </Swiper>

                <div className="jdw-name-info">
                    <h2>Frontend Engineer(AI플랫폼 서비스 Web 개발)</h2>

                    <div className="jdw-sub-name">
                        <div className="jdw-company-name">알체라</div>
                        <div className="jdw-response-level">응답률 평균 이상</div>
                        <div clssName="jdw-location">서울 . 한국</div>
                    </div>
                    <div className="jdw-tag-list">
                        
                    {Array.isArray(jobDetail.companyTag)
                        && jobDetail.companyTag.map((tag)=>(
                        <div className="jdw-tag">#{tag.companyTagName}</div>
                    ))}
                    </div>
                </div>

                <p>

                ■ 회사소개<br/>
                Alchera는 국내 1위 영상 인식 AI 기술을 바탕으로 “Smart Viewing”을 실현하고 있습니다.<br/> 
                카메라 기기에 최적화된 AI를 통해 출입통제 시스템, Helth-Care, 산불 감시(Firescout), Fin-Tech(useB) 등 모든 산업으로 나아가고 있습니다.<br/> 
                AI를 통해 인류를 더 나은 곳으로 갈 수 있게 할 수 있다면 어느 분야든 알체라의 도전은 멈추지 않습니다.<br/> 
                Alchera와 함께 AI 기술로 세상을 혁신하고 싶으신 분들은 알체라에 합류해 주세요!<br/> 
                <br/><br/>
                ■ 부서 소개<br/>
                Data Science Division은 AI 데이터를 수집, 가공하여 AI가 학습할 수 있는 데이터셋을 만들고 있습니다. AI 모델링이 고도화 되기 위해서는 충분한 AI학습 데이터가 필요합니다. Business Planning Team은 알체라가 좀 더 효율적으로 데이터를 수집할 수 있는 플랫폼을 구축하고, 보유한 방대한 데이터를 바탕으로 한 신규 사업을 기획하고 있습니다.
                <br/>
                주요업무<br/>
                - AI 기술 고도화를 위해 필요한 데이터 수집/가공하는 플랫폼 개발<br/>
                - 데이터 가공 서비스에 대한 데이터를 시각화하여 의미 있는 데이터로 분석 및 리포트 제공<br/>
                - 반응형 웹 개발, 프론트엔드 성능을 높이기 위해 지속적으로 연구 및 개발<br/>
                - 신규 서비스 기획<br/>
                - UI/UX 개선을 위한 기획<br/>
                <br/>
                자격요건<br/>
                - 학력 : 학력 무관<br/>
                - 전공 : 전공 무관<br/>
                - 경력 : Web/App 개발 5년 이상 경력 보유자<br/>
                - 경험<br/>
                1) Vue, React, Angular 등 JS 프레임워크/라이브러리 환경에 개발 경험이 있으신 분<br/>
                2) HTML, CSS 등 Web 기술 전반에 대한 이해도가 높으신 분<br/>
                3) RESTful API 클라이언트 개발 경험이 있으신 분<br/>
                4) 원활한 커뮤니케이션 능력과 타인을 배려하는 능력을 보유하신 분<br/>
                <br/>
                우대사항<br/>
                1) 자기 주도적으로 업무를 수행할 수 있으신 분<br/>
                2) 개발에 대한 열정이 있고 새로운 도전을 즐기는 분<br/>
                3) 새로운 기술에 호기심이 많고 타인과 함께 공유하기를 즐기시는 분<br/>
                4) 사용자 중심의 중요성을 알고 사용자 관점으로 UI/UX를 고민하시는 분<br/>
                5) SPA(Single Page Application) 개발 경험이 있으신 분<br/>
                6) 반응형 웹 개발 경험이나 안드로이드/iOS 앱 개발을 경험해 보신 분<br/>
                7) Github, Jira 사용 경험이 있으신 분<br/>
                <br/>
                [채용 절차]<br/>
                서류전형 - Job fit Interview - Culture fit Interview - 처우협의 - 건강검진 - 최종합격<br/>
                <br/>
                [유의 사항]<br/>
                •전형 절차는 일정 및 상황에 따라 변동될 수 있습니다.<br/>
                •진행 일정은 확정되는 대로 지원자분들에게 개별 안내 예정입니다.<br/>
                •본 채용은 모집 기간 내에 인재 선발 완료 시 공고가 마감될 수 있습니다.<br/>
                •지원서 내용 중 허위 사실이 있는 경우에는 합격이 취소될 수 있습니다.<br/>
                <br/>
                혜택 및 복지<br/>
                ■ 몰입할 수 있는 최고의 환경<br/>
                • 자유 복장과 자율 출퇴근제<br/>
                • 재택 근무제<br/>
                • 직무에 맞는 최고급 업무 장비 및 소프트웨어 제공<br/>
                • 전 직원 모션 데스크 기본 제공<br/>
                • 업무에 집중할 수 있는 포커스 룸 <br/>
                • 고급 커피 무제한 제공<br/>
                • 야근 택시비 지원<br/>
                <br/>
                ■ 아낌없는 보상과 지원<br/>
                • 업계 최고 연봉<br/>
                • 개인 역량에 따른 사이닝/리텐션 보너스 지급<br/>
                • 내부 인재 추천 제도 운영 (포상금 최대 7백만 원)<br/>
                • 각종 경조비 지원 (ex. 결혼 시 200만 원)<br/>
                • 생일자 상품권 지급<br/>
                <br/>
                ■ 휴식과 에너지<br/>
                • Refresh 휴가 제도 운영 (1년 최대 5일 휴가 별도 지급)<br/>
                • 3/6/10년 근속자 대상 휴가 지원금 지원<br/>
                • 사무실 내 안마 의자<br/>
                • 종합 건강 검진 지원 (배우자 포함)<br/>
                • 휴양소 대명 리조트 운영<br/>
                • 독감 예방 접종 지원<br/>
                <br/>
                ■ 함께 성장하는 알체라<br/>
                • 자기 개발비 지원<br/>
                • 온/오프라인 교육 무제한 지원<br/>
                • 직무 관련 도서 구입비 무제한 지원<br/>
                • 본인 및 자녀 학자금 지원<br/>
                • 팀별 회의비 지원<br/>
                <br/>
                <br/>
                [알체라를 더 알고 싶다면?]<br/>
                - Alchera Youtube (https://www.youtube.com/channel/UC5xYRGgq2dMEjwO-TJDf2Hw)<br/>
                - Alchera Blog (https://medium.com/dreamtime-alchera-inc/tagged/korean)<br/>
                - Alchera Instagram (https://instagram.com/alchera_ai?igshid=YmMyMTA2M2Y=)<br/>
                </p>

                <div>
                    <h6>기술스택 ・ 툴</h6>

                    <div className="skill-item-list">
                        {Array.isArray(jobDetail.techSkill)
                        && jobDetail.techSkill.map((techSkill)=>(
                        <div className="skill-item">{techSkill.techSkillName}</div>
                        ))}
                    </div>
                </div>

                <hr />

                <div className="job-workplace-wrapper">
                    <div>
                        <span className="jww-title">마감일</span>
                        <span>2022.09.23</span>
                    </div>

                    <div>
                        <span className="jww-title">근무지역</span>
                        <span>경기도 성남시 분당구 판교로 256번길 25, GB2 C동 7층</span>
                    </div>

                    {/* <img alt="Map with company address" src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=700&amp;h=254&amp;markers=type:d|size:mid|pos:127.1031327 37.4004114|color:red&amp;scale=2&amp;X-NCP-APIGW-API-KEY-ID=z7e7ujba1u" /> */}
                </div>

                <div className="company-info">
                    <div className="ci-info-sub">
                        <img src="https://static.wanted.co.kr/images/wdes/0_5.3da92f3a.jpg"  alt=""/>
                        <div className="ci-name">
                            <h5>알체라</h5>
                            <h6>IT, 컨텐츠</h6>
                        </div>
                    </div>
                    <button>팔로우</button>
                </div>

                <div className="warning-header-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"></path><path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path><path fill-rule="nonzero" d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path></g></svg>
                    <div>본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의 
용도로 사용할 수 없습니다.</div>
                </div>
            </div>

            <div className='jdw-right-wrapper'>
                <div className="jdw-right-container">
                    <h3>채용보상금</h3>

                    <div className="reward-info-list">
                        <div className="reward-info">
                            <h4>추천인</h4>
                            <p>500,000원</p>
                        </div>
                        <div className="reward-info">
                            <h4>지원자</h4>
                            <div>500,000원</div>
                        </div>
                    </div>

                    <button className="share-btn">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 19 19"><defs><path id="shareIcon" d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"></path></defs><g fill="none" fillRule="evenodd"><use fill="#36F" xlinkHref="#shareIcon"></use></g></svg>
                    </button>

                    <button className="bookmark-btn">
                        <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                        <div>북마크하기</div>
                    </button>
                    <button className="apply-btn">지원하기</button>

                    <div className="reactions-wrapper">
                        <button className="reaction-like">
                            <span>🖤</span>
                            <span>1</span>
                        </button>
                        <button className="reaction-btn">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" alt="" />
                        </button>
                    </div>
                </div>

                <div className="application-container">
                    <div className="ac-items">
                        <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="70" alt="logo-wantedai" style={{marginBottom: "3px"}} />
                        <span>합격예측</span>
                    </div>
                    <span className="ac-sub">서류합격률이 궁금하다면?</span>
                </div>
            </div>
            </div>

            <MainContainerStyle width={250} height={188}>
                    <div className="jdw-position-recommend">이예은님, 이 포지션을 찾고 계셨나요?</div>
                    <div className="mc-list">
                        {Array.isArray(jobDetail.associatedEmployment)
                        && jobDetail.associatedEmployment.map((position)=>(
                            <div className="mc-containers">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F29454%2Fpjxtg3m25hlip1fm__400_400.png&w=400&q=75" alt="" />
                            <div className="jf-items">
                                <div className='jf-name'>
                                    <div>{position.title}</div>
                                    <div className="jf-company-name">{position.context}</div>
                                    <span>{position.country}.{position.location}</span>
                                    <div className="jf-reward">채용보상금 {position.referralCompensation}원</div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </MainContainerStyle>
            <Footer/>
        </JobDetailStyles>
    )
}