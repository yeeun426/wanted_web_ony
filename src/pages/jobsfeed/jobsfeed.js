import Header from '../../components/header';
import styled from 'styled-components';
import SwiperComponent from '../../components/swiper';
import Footer from '../../components/footer';

import { LineBannerStyle } from '../../components/styled';

function JobsFeed() {
    return(
        <JobsFeedStyle>
            <Header />
            <SwiperComponent />

            <LineBannerStyle marginTop={60} marginBottom={60}>
                <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 32 32"><path d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"></path></svg>
                <div>채용 중인 포지션 보러가기</div>
            </LineBannerStyle>
            <Footer />
        </JobsFeedStyle>
    )
}

export default JobsFeed;

const JobsFeedStyle = styled.div`
`;