import React from 'react'

import {SearchStyle} from '../components/styled'
import { Link } from 'react-router-dom';
//recoil
import {useRecoilState} from "recoil";
import {tagRecoilState} from '../atoms/User'

export default function Search() {
    const [tag, setTag] = useRecoilState(tagRecoilState);

    const onClickTag = (e) => {
        setTag(document.activeElement.id);
        console.log(tag)
    }

    return(
        <SearchStyle>
            <div className="search-wrapper">
                <div className="search-container">
                <input 
                    type="text"
                    placeholder='#태그, 회사, 포지션 검색'>
                </input>
                <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18" className="SearchBar_SearchBar_searchIcon__I9wXL"><defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path></defs><g fill="none" fillRule="evenodd"><use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use></g></svg>
                
                <div className="search-sub">
                    <div>추천태그로 검색해보세요</div>
                    <div className="tag-home">
                        <div>기업태그 홈 이동하기</div>
                        <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path></svg>
                    </div>
                </div>

                    <div className="search-tag">
                    <Link to ="/tagsearch">
                        <button id="#퇴사율5%이하" onClick={onClickTag} style={{backgroundColor: '#f0f8f8'}}>#퇴사율5%이하</button>
                        <button id="#연봉상위2~5%" onClick={onClickTag} style={{backgroundColor: '#eeedf4'}}>#연봉상위2~5%</button>
                        <button id="#원격근무" onClick={onClickTag} style={{backgroundColor: '#e8edf3'}}>#원격근무</button>
                        <button id="#헬스장" onClick={onClickTag} style={{backgroundColor: '#e9f4fb'}}>#헬스장</button>
                        <button id="#연말보너스" onClick={onClickTag} style={{backgroundColor: '#effbf3'}}>#연말보너스</button>   
                    </Link>
                    </div>  
                </div> 
            </div>      
        </SearchStyle>
    )
}