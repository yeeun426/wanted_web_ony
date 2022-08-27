import React from 'react';
import Header from '../../components/header'
import {TagSearchStyle} from '../../components/styled'

export default function tagsearch() {
    return(
    <TagSearchStyle>
        <Header activeMenu="tagsearch"/>
        <div className="tag-container">
            <div className="search-tag">#맥주</div>
            <button className="tag-total">전체보기</button>
            <div className="tag-button">
                <span>추천</span>
                <button>#맥주</button>
                <button>#Macbook</button>
                <button>#샐러드</button>
                <button>#간식</button>
                <button>#누적투자100억이상</button>
            </div>
        </div>

        <div className="company-wrapper">
            <div className="company-list">
                <div className="company-items">
                    <div className="ci-info">
                        <div className="ci-name">
                            <img src="https://static.wanted.co.kr/images/wdes/0_5_b030288d-fc52-47ed-a1ca-2aafa023e44e.jpg" alt="company logo" />
                            <span>레디쉬코리아</span>
                        </div>
                        <button>팔로우</button>
                    </div>

                    <div className="tag-list">
                        <span>#연봉상위11~20%</span>
                        <span>#건강검진</span>
                        <span>#위워크</span>
                        <span>#커피</span>
                        <span>#맥주</span>
                        <span>#스톡옵션</span>
                        <span>#설립4~9년</span>
                    </div>
                </div>

                <div className="company-items">
                    <div className="ci-info">
                        <div className="ci-name">
                            <img src="https://static.wanted.co.kr/images/wdes/0_5_b030288d-fc52-47ed-a1ca-2aafa023e44e.jpg" alt="company logo" />
                            <span>레디쉬코리아</span>
                        </div>
                        <button>팔로우</button>
                    </div>

                    <div className="tag-list">
                        <span>#연봉상위11~20%</span>
                        <span>#건강검진</span>
                        <span>#위워크</span>
                        <span>#커피</span>
                        <span>#맥주</span>
                        <span>#스톡옵션</span>
                        <span>#설립4~9년</span>
                    </div>
                </div>

                <div className="company-items">
                    <div className="ci-info">
                        <div className="ci-name">
                            <img src="https://static.wanted.co.kr/images/wdes/0_5_b030288d-fc52-47ed-a1ca-2aafa023e44e.jpg" alt="company logo" />
                            <span>레디쉬코리아</span>
                        </div>
                        <button>팔로우</button>
                    </div>

                    <div className="tag-list">
                        <span>#연봉상위11~20%</span>
                        <span>#건강검진</span>
                        <span>#위워크</span>
                        <span>#커피</span>
                        <span>#맥주</span>
                        <span>#스톡옵션</span>
                        <span>#설립4~9년</span>
                    </div>
                </div>
            </div>
        </div>
    </TagSearchStyle>
    )
}