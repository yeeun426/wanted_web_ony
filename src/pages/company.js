import React, {useState} from 'react'
import {CompanyDetailStyle} from '../components/styled'
import Header from '../components/header';
import Footer from '../components/footer'
import {Link} from 'react-router-dom';

export default function Company() {
    const [total, setTotal] = useState(true);
    const [employees, setEmployees] = useState(false);
    const [retiree, setRetiree] = useState(false);

    const onClickTotal = () => {
        setTotal(true);
        setEmployees(false);
        setRetiree(false);
    }

    const onClickEmployee = () => {
        setTotal(false);
        setEmployees(true);
        setRetiree(false);
    }

    const onClickRetiree = () => {
        setTotal(false);
        setEmployees(false);
        setRetiree(true);
    }
    // const counter = ($counter, max) => {
    //     let now = max;
    //     const handle = setInterval(() => {
    //       $counter.innerHTML = Math.ceil(max - now);
    //       // 목표수치에 도달하면 정지
    //       if (now < 1) {
    //         clearInterval(handle);
    //       }
    //       // 증가되는 값이 계속하여 작아짐
    //       const step = now / 10;
    //       // 값을 적용시키면서 다음 차례에 영향을 끼침
    //       now -= step;
    //     }, 50);
    // }

    // window.onload = () => {
    // // 카운트를 적용시킬 요소
    // const $counter = document.querySelector(".si-number-info");
    // // 목표 수치
    // const max = 3219;
    // setTimeout(() => counter($counter, max), 2000);
    // }
    return(
        <CompanyDetailStyle>
            <Header />
            <div>
                <div className='header-inner-wrapper'>
                    <div className="hiw-container">
                        <div className="hiw-name">
                            <img src="https://static.wanted.co.kr/images/wdes/0_4.3da92f3a.jpg" alt="" />
                            <div>알체라</div>
                        </div>
                        <button>팔로우</button>
                    </div>
                </div>

                <div className="company-inner-wrapper">
                    <div className="company-left-wrapper">
                        <div className="jobs-position-container">
                            <h3>
                                <span>채용 중인 포지션</span>
                                <button>응답률 평균 이상</button>
                            </h3>

                            <div className="jp-list">
                                    <div className="jp-items">
                                <Link to ="/jobdetail">
                                        <div className="jp-title">Frontend Engineer(AI플랫폼 서비스 Web 개발)</div>
                                        </Link>

                                        <h5>채용보상금 1,000,000원</h5>
                                        <p>2022.09.08까지</p>
                                        <button>
                                        <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                                        </button>
                                    </div>
                                <div className="jp-items">
                                    <div className="jp-title">S/W QA Lead</div>
                                    <h5>채용보상금 1,000,000원</h5>
                                    <p>2022.09.23까지</p>
                                    <button>
                                    <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                                    </button>
                                </div>

                                <div className="jp-items">
                                    <div className="jp-title">Backend Engineer</div>
                                    <h5>채용보상금 1,000,000원</h5>
                                    <p>2022.08.31까지</p>
                                    <button>
                                    <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                                    </button>
                                </div>

                                <div className="jp-items">
                                    <div className="jp-title">Web 디자이너</div>
                                    <h5>채용보상금 1,000,000원</h5>
                                    <p>2022.08.31까지</p>
                                    <button>
                                    <svg width="13" height="17" viewBox="0 0 13 17" style={{color: "rgb(51, 102, 255)"}}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                                    </button>
                                </div>
                            </div>

                            <button className="jp-more-btn">더 많은 포지션 보기 +</button>
                        </div>

                        <div className="intro-company-container">
                            <h3>회사 소개</h3>
                            <div className="icc-image-list">
                                <button>
                                    <img src="https://static.wanted.co.kr/images/company/10127/eevirddqe8ytqdq0__1080_790.jpg" alt="company office 1"/>
                                </button>
                                <button>
                                    <img src="https://static.wanted.co.kr/images/company/10127/ntpzmnb2ifhqd38k__1080_790.jpg" alt="company office 2"/>
                                </button>
                                <button>
                                    <img src="https://static.wanted.co.kr/images/company/10127/avjunnlvgavrbqk5__1080_790.jpg" alt="company office 3"/>
                                </button>
                                <button>
                                    <img src="https://static.wanted.co.kr/images/company/10127/8mys4op6qd5pp4cq__1080_790.jpg" alt="company office 4"/>
                                </button>
                            </div>
                            <div className="icc-details">
                                [About Alchera]
                                <br/>
                                <br/>
                                알체라는 AI로 세상을 더 의미 있게 만들어 가고 싶은 사람들이 모인 곳입니다.
                                <br/>
                                저희가 꿈꾸는 혁신은 복잡하게 여겨지는 세상의 문제들을 AI 기술로 쉽게 풀어나가는 것입니다. 알체라는 국내 1위의 영상 인식 기술력을 보유하고 있으며, 이를 상용화 및 서비스하고 있습니다.
                                <br/>
                                <br/>
                                알체라가 선도하는 Smart Viewing은 카메라에 최적화된 AI 모델을 탑재하여 기존 모니터링의 한계를 비약적으로 극복합니다. 저희는 ‘Smart Viewing’을 실현하기 위해 수많은 Data를 직접 수집하고 학습시키면서 신뢰받는 AI Dataset을 구축하였습니다. 이를 바탕으로 다양한 분야의 니즈를 파악하여 끊임없이 도전하였습니다. 현재는 AI를 접목할 수 있는 레그 테크(Reg-tech), 그린테크(green-tech), 텔레메디신(telemedicine), 보안 등 다양한 분야에서 사업 영역을 계속 넓혀가고 있습니다.
                                <br />
                                <br />
                                모든 카메라가 똑똑해지는 그날까지, 시장을 리드하고 세상의 패러다임을 바꿀 분들을 기다립니다. 저희와 함께 새로운 가치를 만드실 분은 알체라에 합류해 주세요! 
                                <br/>
                                <br/>
                                <br/>
                                - Alchera Homepage (https://alcherainc.com/about) <br/>
                                - Alchera Youtube (https://www.youtube.com/channel/UC5xYRGgq2dMEjwO-TJDf2Hw) <br/>
                                - Alchera Blog (https://medium.com/dreamtime-alchera-inc/tagged/korean) <br/>
                                - Alchera Facebook (https://www.facebook.com/alcherainc) <br/>
                                - Alchera Benefits (https://url.kr/waxg5d) <br/>
                                <br/><br/>
                                http://alcherainc.com
                            </div>

                            <button>더 보기 +</button>
                        </div>

                        <div className="salary-items">
                            <div className="si-title">
                                <h3>평균 연봉</h3>
                                <h4>출처:금감원</h4>
                            </div>

                            <div className="salary-info">
                                <div className="si-info">
                                    <div className="si-new">신규 입사자</div>
                                    <div className="si-new-info">정보 없음</div>
                                </div>

                                <div className="si-border"></div>

                                <div className="si-info">
                                    <div className="si-new">전체</div>
                                    <div className="si-new-info">3,219만원</div>
                                    {/* <div>
                                        <div className="si-number-info">0</div>
                                        <div>만원</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="size-container">
                            <div className="si-title">
                                <h3>직원수</h3>
                                <h4>출처:금감원</h4>
                            </div>

                            <div className="size-info">
                                <div className="si-total">전체 인원</div>
                                <div className="si-total-info">204</div>
                                {/* <div className="si-total-info">0</div> */}
                            </div>

                            {/* 전체 인원 */}
                            { total &&
                            <svg className="recharts-surface" width="722" height="406.125" viewBox="0 0 722 406.125" version="1.1"><defs><clipPath id="recharts12-clip"><rect x="37" y="5" height="366.125" width="680"></rect></clipPath></defs><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="680" height="30" type="category" x="37" y="371.125" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="371.125" x2="717" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="37" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="37" dy="0.71em">Aug 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="98.81818181818181" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="98.81818181818181" dy="0.71em">Sep 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="160.63636363636363" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="160.63636363636363" dy="0.71em">Oct 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="222.45454545454547" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="222.45454545454547" dy="0.71em">Nov 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="284.27272727272725" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="284.27272727272725" dy="0.71em">Dec 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="346.0909090909091" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="346.0909090909091" dy="0.71em">Jan 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="407.90909090909093" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="407.90909090909093" dy="0.71em">Feb 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="469.72727272727275" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="469.72727272727275" dy="0.71em">Mar 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="531.5454545454545" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="531.5454545454545" dy="0.71em">Apr 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="593.3636363636364" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="593.3636363636364" dy="0.71em">May 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="655.1818181818182" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="655.1818181818182" dy="0.71em">Jun 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="703.0187492370605" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="703.0187492370605" dy="0.71em">Jul 22</tspan></text></g></g></g><g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line width="32" orientation="left" height="366.125" type="number" x="5" y="5" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="5" x2="37" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="371.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">0</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="279.59375" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">55</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="188.0625" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">110</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="96.53125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">165</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="10" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">220</tspan></text></g></g></g><g className="recharts-layer recharts-line"><path stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" className="recharts-curve recharts-line-curve" stroke-dasharray="773.5303344726562px 0px" type="monotone" d="M37,99.85965909090908C57.60606060606061,88.48759469696968,78.2121212121212,77.1155303030303,98.81818181818181,61.58295454545454C119.42424242424242,46.050378787878785,140.03030303030303,6.664204545454536,160.63636363636363,6.664204545454536C181.24242424242425,6.664204545454536,201.84848484848484,34.95568181818181,222.45454545454547,34.95568181818181C243.06060606060606,34.95568181818181,263.66666666666663,6.664204545454536,284.27272727272725,6.664204545454536C304.8787878787879,6.664204545454536,325.4848484848485,64.91136363636365,346.0909090909091,68.23977272727274C366.69696969696975,71.56818181818183,387.3030303030303,69.90397727272727,407.90909090909093,73.23238636363637C428.51515151515156,76.56079545454546,449.1212121212121,101.52386363636366,469.72727272727275,101.52386363636366C490.3333333333333,101.52386363636366,510.93939393939394,97.36335227272728,531.5454545454545,93.20284090909092C552.1515151515151,89.04232954545455,572.7575757575758,83.49498106060605,593.3636363636364,76.56079545454544C613.969696969697,69.62660984848483,634.5757575757576,59.08664772727274,655.1818181818182,51.59772727272728C675.7878787878789,44.10880681818184,696.3939393939394,37.868039772727286,717,31.627272727272736"></path><g className="recharts-layer recharts-line-dots"><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="37" cy="99.85965909090908" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="98.81818181818181" cy="61.58295454545454" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="160.63636363636363" cy="6.664204545454536" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="222.45454545454547" cy="34.95568181818181" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="284.27272727272725" cy="6.664204545454536" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="346.0909090909091" cy="68.23977272727274" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="407.90909090909093" cy="73.23238636363637" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="469.72727272727275" cy="101.52386363636366" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="531.5454545454545" cy="93.20284090909092" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="593.3636363636364" cy="76.56079545454544" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="655.1818181818182" cy="51.59772727272728" className="recharts-dot recharts-line-dot"></circle><circle r="3" type="monotone" stroke="rgba(37, 139, 247, 1)" strokeWidth="2" fill="rgba(37, 139, 247, 1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="680" height="366.125" cx="717" cy="31.627272727272736" className="recharts-dot recharts-line-dot"></circle></g></g><g className="recharts-layer recharts-active-dot"><circle cx="469.72727272727275" cy="101.52386363636366" r="4" fill="rgba(37, 139, 247, 1)" strokeWidth="2" stroke="#fff" className="recharts-dot"></circle></g></svg>
                        }
                            {/* 입사자수 */}

                        { employees &&
                            <svg className="recharts-surface" width="722" height="406.125" viewBox="0 0 722 406.125" version="1.1"><defs><clipPath id="recharts16-clip"><rect x="37" y="5" height="366.125" width="680"></rect></clipPath></defs><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="680" height="30" type="category" x="37" y="371.125" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="371.125" x2="717" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="65.33333333333333" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="65.33333333333333" dy="0.71em">Aug 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="121.99999999999999" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="121.99999999999999" dy="0.71em">Sep 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="178.66666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="178.66666666666666" dy="0.71em">Oct 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="235.33333333333334" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="235.33333333333334" dy="0.71em">Nov 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="291.99999999999994" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="291.99999999999994" dy="0.71em">Dec 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="348.66666666666663" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="348.66666666666663" dy="0.71em">Jan 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="405.3333333333333" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="405.3333333333333" dy="0.71em">Feb 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="461.99999999999994" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="461.99999999999994" dy="0.71em">Mar 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="518.6666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="518.6666666666666" dy="0.71em">Apr 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="575.3333333333334" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="575.3333333333334" dy="0.71em">May 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="632" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="632" dy="0.71em">Jun 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="688.6666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="688.6666666666666" dy="0.71em">Jul 22</tspan></text></g></g></g><g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line width="32" orientation="left" height="366.125" type="number" x="5" y="5" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="5" x2="37" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="371.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">0</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="279.59375" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">15</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="188.0625" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">30</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="96.53125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">45</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="10" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">60</tspan></text></g></g></g><g className="recharts-layer recharts-bar"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer"><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="219.67499999999998" x="42.666666666666664" y="151.45000000000002" radius="0" className="recharts-rectangle" d="M 42.666666666666664,151.45000000000002 h 45 v 219.67499999999998 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="274.59375" x="99.33333333333333" y="96.53125" radius="0" className="recharts-rectangle" d="M 99.33333333333333,96.53125 h 45 v 274.59375 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="323.41041666666666" x="155.99999999999997" y="47.71458333333334" radius="0" className="recharts-rectangle" d="M 155.99999999999997,47.71458333333334 h 45 v 323.41041666666666 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="146.45000000000002" x="212.66666666666666" y="224.67499999999998" radius="0" className="recharts-rectangle" d="M 212.66666666666666,224.67499999999998 h 45 v 146.45000000000002 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="195.26666666666668" x="269.3333333333333" y="175.85833333333332" radius="0" className="recharts-rectangle" d="M 269.3333333333333,175.85833333333332 h 45 v 195.26666666666668 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="91.53125" x="326" y="279.59375" radius="0" className="recharts-rectangle" d="M 326,279.59375 h 45 v 91.53125 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="97.63333333333333" x="382.6666666666667" y="273.4916666666667" radius="0" className="recharts-rectangle" d="M 382.6666666666667,273.4916666666667 h 45 v 97.63333333333333 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="91.53125" x="439.3333333333333" y="279.59375" radius="0" className="recharts-rectangle" d="M 439.3333333333333,279.59375 h 45 v 91.53125 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="115.93958333333333" x="496" y="255.18541666666667" radius="0" className="recharts-rectangle" d="M 496,255.18541666666667 h 45 v 115.93958333333333 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="176.9604166666667" x="552.6666666666666" y="194.1645833333333" radius="0" className="recharts-rectangle" d="M 552.6666666666666,194.1645833333333 h 45 v 176.9604166666667 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="183.0625" x="609.3333333333333" y="188.0625" radius="0" className="recharts-rectangle" d="M 609.3333333333333,188.0625 h 45 v 183.0625 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(34, 189, 121, 1)" width="45" height="250.18541666666667" x="665.9999999999999" y="120.93958333333333" radius="0" className="recharts-rectangle" d="M 665.9999999999999,120.93958333333333 h 45 v 250.18541666666667 h -45 Z"></path></g></g></g></g></svg>
                        }

                            {/* 퇴사자수 */}

                        { retiree &&
                            <svg className="recharts-surface" width="722" height="406.125" viewBox="0 0 722 406.125" version="1.1"><defs><clipPath id="recharts16-clip"><rect x="37" y="5" height="366.125" width="680"></rect></clipPath></defs><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="680" height="30" type="category" x="37" y="371.125" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="371.125" x2="717" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="65.33333333333333" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="65.33333333333333" dy="0.71em">Aug 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="121.99999999999999" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="121.99999999999999" dy="0.71em">Sep 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="178.66666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="178.66666666666666" dy="0.71em">Oct 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="235.33333333333334" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="235.33333333333334" dy="0.71em">Nov 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="291.99999999999994" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="291.99999999999994" dy="0.71em">Dec 21</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="348.66666666666663" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="348.66666666666663" dy="0.71em">Jan 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="405.3333333333333" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="405.3333333333333" dy="0.71em">Feb 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="461.99999999999994" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="461.99999999999994" dy="0.71em">Mar 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="518.6666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="518.6666666666666" dy="0.71em">Apr 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="575.3333333333334" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="575.3333333333334" dy="0.71em">May 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="632" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="632" dy="0.71em">Jun 22</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text orientation="bottom" width="680" height="30" type="category" x="688.6666666666666" y="379.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="688.6666666666666" dy="0.71em">Jul 22</tspan></text></g></g></g><g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line width="32" orientation="left" height="366.125" type="number" x="5" y="5" className="recharts-cartesian-axis-line" stroke="rgba(0,0,0,0.1)" fill="none" x1="37" y1="5" x2="37" y2="371.125"></line><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="371.125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">0</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="279.59375" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">15</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="188.0625" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">30</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="96.53125" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">45</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text width="32" orientation="left" height="366.125" type="number" x="29" y="10" stroke="none" fill="#666" font-size="11px" font-weight="500" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="29" dy="0.355em">60</tspan></text></g></g></g><g className="recharts-layer recharts-bar"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer"><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="152.55208333333334" x="42.666666666666664" y="218.57291666666666" radius="0" className="recharts-rectangle" d="M 42.666666666666664,218.57291666666666 h 45 v 152.55208333333334 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="122.04166666666666" x="99.33333333333333" y="249.08333333333334" radius="0" className="recharts-rectangle" d="M 99.33333333333333,249.08333333333334 h 45 v 122.04166666666666 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="250.18541666666667" x="155.99999999999997" y="120.93958333333333" radius="0" className="recharts-rectangle" d="M 155.99999999999997,120.93958333333333 h 45 v 250.18541666666667 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="91.53125" x="212.66666666666666" y="279.59375" radius="0" className="recharts-rectangle" d="M 212.66666666666666,279.59375 h 45 v 91.53125 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="317.30833333333334" x="269.3333333333333" y="53.81666666666666" radius="0" className="recharts-rectangle" d="M 269.3333333333333,53.81666666666666 h 45 v 317.30833333333334 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="115.93958333333333" x="326" y="255.18541666666667" radius="0" className="recharts-rectangle" d="M 326,255.18541666666667 h 45 v 115.93958333333333 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="195.26666666666668" x="382.6666666666667" y="175.85833333333332" radius="0" className="recharts-rectangle" d="M 382.6666666666667,175.85833333333332 h 45 v 195.26666666666668 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="79.32708333333335" x="439.3333333333333" y="291.79791666666665" radius="0" className="recharts-rectangle" d="M 439.3333333333333,291.79791666666665 h 45 v 79.32708333333335 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="115.93958333333333" x="496" y="255.18541666666667" radius="0" className="recharts-rectangle" d="M 496,255.18541666666667 h 45 v 115.93958333333333 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="91.53125" x="552.6666666666666" y="279.59375" radius="0" className="recharts-rectangle" d="M 552.6666666666666,279.59375 h 45 v 91.53125 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="176.9604166666667" x="609.3333333333333" y="194.1645833333333" radius="0" className="recharts-rectangle" d="M 609.3333333333333,194.1645833333333 h 45 v 176.9604166666667 h -45 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="rgba(134, 147, 158, 1)" width="45" height="189.16458333333335" x="665.9999999999999" y="181.96041666666665" radius="0" className="recharts-rectangle" d="M 665.9999999999999,181.96041666666665 h 45 v 189.16458333333335 h -45 Z"></path></g></g></g></g></svg>
                        }
                        
                            <div className="type-selector-list">
                                <button className={total && !employees && !retiree ? "btn-active-selector": "btn-selector"} onClick={onClickTotal}id="total-num">
                                    전체 인원
                                </button>
                                <button className={!total && employees && !retiree ? "btn-active-selector": "btn-selector"} onClick={onClickEmployee} id="employee-count">
                                    입사자수
                                </button>
                                <button className={!total && !employees && retiree ? "btn-active-selector": "btn-selector"} onClick={onClickRetiree}id="employee-end">
                                    퇴사자수
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3>이 회사의 뉴스</h3>
                            <div className="company-news-list">
                                <div className="cni-items">
                                    <h4>네이버 스노우·알체라 JV 팔라, '마리끌레르 코리아'와 NFT 발행한다 - 테크M</h4>
                                    <p>techm.kr 2022.8.22</p>
                                </div>

                                <div className="cni-items">
                                    <h4>네이버 스노우·알체라 JV 팔라, '마리끌레르 코리아'와 NFT 발행한다 - 테크M</h4>
                                    <p>techm.kr 2022.8.22</p>
                                </div>

                                <div className="cni-items">
                                    <h4>네이버 스노우·알체라 JV 팔라, '마리끌레르 코리아'와 NFT 발행한다 - 테크M</h4>
                                    <p>techm.kr 2022.8.22</p>
                                </div>

                                <div className="cni-items">
                                    <h4>네이버 스노우·알체라 JV 팔라, '마리끌레르 코리아'와 NFT 발행한다 - 테크M</h4>
                                    <p>techm.kr 2022.8.22</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="company-right-wrapper">
                        <h3>태그</h3>
                        <button>#인원급성장</button>
                        <button>#51~300명</button>
                        <button>#설립4~9년</button>
                        <button>#커피</button>
                        <button>#안마의자</button>
                        <button>#택시비</button>
                        <button>#건강검진</button>
                        <button>#인공지능</button>
                        <button>#재택근무</button>
                        <button>#IT, 컨텐츠</button>
                        <button id="crw-more-btn">+ 태그 의견보내기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </CompanyDetailStyle>
    )
}