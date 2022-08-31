import React from 'react'
import styled from 'styled-components';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
// dummydata 
import swiperData from '../data/swiper.json';
SwiperCore.use([Navigation, Autoplay])	

function SwiperComponent(props) {

    return(
        <SwiperWrapper>
            <Swiper
                slidesPerView={1.44}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
            {/* {swiperData.swiperCategory && swiperData.swiperCategory.length > 0 &&  */}
            {
                swiperData.jobsfeed.map((swiper) =>
                <SwiperSlide key={swiper.id}>
                    <div>
                        <img src={swiper.image} alt={swiper.title} />
                        <div className="slideDetails">
                            <h2>{swiper.title}</h2>
                            <h3>{swiper.info}</h3>
                            <hr style={{height: '1px', backgroundColor: '#ececec', border: "none"}}></hr>
                            <div style={{display: 'flex', alignItems: 'center', margin: "6px 0 0 13px", padding:"6px 8px"}}>
                                <span>바로가기</span>
                                <svg style={{width:"1em", height:"1em"}} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>                       
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
            }
            </Swiper>           
        </SwiperWrapper>
    )
}

export default SwiperComponent;

const SwiperWrapper = styled.div`
    padding-top: 80px;

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

    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;

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

        width: 30px;
        background-image: url("https://static.thenounproject.com/png/1407190-200.png");
        background-size: 18px 17px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .swiper-button-next {
        right: calc((100% - 1200px)/2);
        color: transparent;
        background-color: #fff;
        opacity: .5;
        border-radius: 15px;
        top: 47%;
        
        height: 60px;
        width: 30px;
        background-image: url("https://icons-for-free.com/download-icon-arrows+chevron+direction+forward+next+right+icon-1320085938847587870_0.svg");
        background-size: 17px 27px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .slideDetails{
        position: absolute;
        bottom: 28px;
        width: 330px;
        height: 146px;
        border-radius: 4px;
        background-color: #fff;
        text-align: left;
        left: 25px;

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

    img{
        border-radius: 4px;
    }

    h3 {
        height: 44px;
    }
`;

