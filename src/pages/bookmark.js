import React from 'react';
import Header from '../components/header'
import {BookmarkStyles} from '../components/styled'

import jobsfeed from '../data/jobsfeed.json';
import { MainContainerStyle } from '../components/styled';

export default function bookmark() {

    const positionList = jobsfeed.position.filter(jobsfeed => (jobsfeed.bookmark === true));

    return(
        <BookmarkStyles>
            <Header />
            <div className="bookmark-container">
                <div className="bookmark-wrapper">
                    <h2>북마크</h2>

                    <MainContainerStyle width={250} height={188} paddingTop={1}>
                        <div className="mc-list">
                        {positionList.map((position)=>(
                        <div className="mc-containers">
                            <img src={position.image} alt="드림에이스"/>
                            <button id={position.id} className="bookmark-icon" fill="blue">
                                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="rgb(51,102,255)"></path></svg>
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
                </div>
            </div>

        </BookmarkStyles>
    )
}