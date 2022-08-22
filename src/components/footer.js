import React from 'react';
import styled from 'styled-components';

function footer() {
    return(
        <FooterWrapper>
            <div className='footerUpper'>
                        
                <UpperItem>
                    <img style={{marginRight:"50px"}} src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=100" alt="wanted" />
                   
                    <div className="footerDetails">기업소개</div>
                    <div className="footerDetails">이용약관</div>
                    <div className="footerDetails">개인정보 처리방침</div>
                    <div className="footerDetails">고객센터</div>
                </UpperItem>

                <UpperItem>
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple" />
                    <img className="footerSns" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google" />
                </UpperItem>
            </div>

            <div className='footerLower'>
                <div>
                 (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                <br />
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
                <br />
                © Wantedlab, Inc.
                </div>
            </div>
        </FooterWrapper>
    )
}

export default footer;

const FooterWrapper = styled.div`
    padding: 18px 0 65px;
    border-top: 1px solid #ececec;

    .footerUpper{
        display: flex;  
        width: 1020px;

        justify-content: space-between;
        align-items: center;

        margin: 0 auto 18px;

        font-size: 15px;
        color: #3a3a3a;
        line-height: 2.6;

        .footerDetails{
            margin-right: 45px;
        }
    }

    .footerLower{
        font-size: 12px;
        font-weight: 500;
        line-height: 1.6666666667em;
        color: #767676;
        width: 1060px;
        margin: auto;
        padding-top: 25px;
        border-top: 1px solid #ececec;
    }
`;

const UpperItem = styled.div`
    display: flex;

    .footerSns{
        height: 20px;
        margin-left: 15px;
    }
`;