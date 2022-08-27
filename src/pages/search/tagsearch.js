import React from 'react';
import Header from '../../components/header'
import {TagSearchStyle} from '../../components/styled'
//recoil
import {tagRecoilState} from '../../atoms/User'
import { useRecoilValue, useRecoilState } from 'recoil';
// dummydata 
import tagData from '../../data/tag.json'

export default function Tagsearch() {
    const [taginfo, setTaginfo] = useRecoilState(tagRecoilState);

    const tag = useRecoilValue(tagRecoilState);

    const onClickTag = (e) => {
        setTaginfo(document.activeElement.id);
        console.log(taginfo)
    }


    return(
    <TagSearchStyle>
        <Header activeMenu="tagsearch"/>
        <div className="tag-container">
            <div className="search-tag">{tag}</div>
            <button className="tag-total">전체보기</button>
            <div className="tag-button">
                <span>추천</span>
                <button onClick={onClickTag}>#맥주</button>
                <button>#Macbook</button>
                <button>#샐러드</button>
                <button>#간식</button>
                <button>#누적투자100억이상</button>
            </div>
        </div>

        <div className="company-wrapper">
            <div className="company-list">
            {tagData.tagSearch.map((tag)=>(
                <div className="company-items">
                    <div className="ci-info">
                        <div className="ci-name">
                            <img src={tag.image} alt="company logo" />
                            <span>{tag.title}</span>
                        </div>
                        <button>팔로우</button>
                    </div>

                    <div className="tag-list">
                        <span>{tag.tag1}</span>
                        <span>{tag.tag2}</span>
                        <span>{tag.tag3}</span>
                        <span>{tag.tag4}</span>
                        <span>{tag.tag5}</span>
                        <span>{tag.tag6}</span>
                        <span>{tag.tag7}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </TagSearchStyle>
    )
}