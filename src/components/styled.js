import styled from "styled-components";

export const CareerInsightStyle = styled.div`
  padding: 60px 0;
  max-width: 1060px;
  text-align: center;
  margin: auto;
  
  .swiper-slide{
    width: auto !important;
  }

  .ci-swiper {
    display: flex;

    .swiper-wrapper{
      margin-top: 30px;
      height: auto;
    }
    .swiper-button-prev, .swiper-button-next{
      background-color: white;
      background-size: 17px 17px;
      background-repeat: no-repeat;
      background-position: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid #aaa;
      box-shadow: 0px 0px 20px 16px white;
    }
    .swiper-button-disabled{
      display: none;
    }
    .swiper-button-next {
      background-image: url(https://icons-for-free.com/download-icon-arrows+chevron+direction+forward+next+right+icon-1320085938847587870_0.svg);
    }
    
    .swiper-button-prev {
      background-image: url(https://static.thenounproject.com/png/1407190-200.png);
    }
    
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
  }

  .ci-title {
    display: flex;
    font-size: 22px;
    line-height: 1.5;
    align-items: center;
    justify-content: center;
  }

  .mySwiper button{
    border-radius: 5px;
    padding: 0 29px;
    height: 50px;
    font-size: 15px;
    border: 1px solid #f2f4f7;
    background-color: #f2f4f7;
    font-family: Pretendard-Thin;
    white-space: nowrap;
  }

  .mySwiper button:hover {
    font-family: Pretendard;
    background-color: #fff;
    border: 1px solid #36f;
    color: #36f;
    outline: none;
  }

  .ci-etc button {
    width: 50px;
    height: 50px;
    margin: 30px 0;

    border: 1px solid #e1e2e3;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    color: #939393;
    background-color: white;
  }

  .contents-items{
    display: flex;
    flex-direction: column;
    width: calc(25% - 20px);
    margin: 0 10px 50px;
    
    img{
      height: 70%;
    }
  }

`;

export const CreatorBannerStyle = styled.div`
  background-color: #36f;
  font-size: 22px;
  color: white;

  .cb-container{
    height: 110px;
    width: 1060px;
    display: flex;
    margin: auto;
    place-items: center;
    justify-content: space-between;

    span{
      color: #a9ecf0;
    }

    .cb-title{
      display:flex;
      align-items: center;
    }
  }

  button{
    width: 220px;
    height: 40px;
    font-size:15px;
    color: #36f;
    background-color: white;
    font-family:"pretendard";
    border: none;
    border-radius: 25px;
  }
`

export const LineBannerStyle = styled.div`
  margin-top: ${(props) => props.marginTop}px !important;
  margin-bottom: ${(props) => props.marginBottom}px !important;

  display: flex;
  width: 1060px;
  margin: auto;
  place-content: center;
  font-size: 17px;
  padding: 21px 30px;
  background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
  box-sizing: border-box;
  border-radius: 36px;
  color: white;
  align-items: center;

  svg{
    width: 15px;
    height: 15px;
    fill: white;
  }

  #searchSvg{
    width: 28px;
    height: 28px;
    margin-right: 6px;
  }
`;

export const MainContainerStyle = styled.div`
  padding-bottom: 60px;
  width: ${(props) => props.widthtotal || 1060 }px;
  margin: auto;
  padding-top: ${(props) => props.paddingTop || 60 }px;

  .jdw-position-recommend {
    margin: 0 0 20px;
    font-size: 20px;
    color: #333;
  }

  .ci-info{
    text-align: left;
    padding: 17px 0 8px 0;
  }

  .mc-main-title{
    text-align: center;
    margin-bottom: 30px;

    .mc-title{
      font-size: 22px;
    }
  }

  .mc-btn-sub{
    display: flex;
    justify-content: center;
    place-items: center;
    font-size: 15px;
    color: #767676;
    margin-top: 5px;
  
    svg{
      width: 15px;
      height: 15px;
      fill: #767676;
    }
  }

  .mc-subinfo{
    font-size: 11px;
    padding: 3px 6px;
    border-radius: 2px;
    color: #ff9100;
    border: 1px solid #ff9100;
    width: fit-content;
    margin: 12px 0 8px;
  }
  
  .mc-containers {
      width: ${(props) => props.width}px;
      margin: 7px;

    img{
      border-radius: 4px;
      width: 100%;
      height: ${(props) => props.height}px;
      object-fit: cover;
      object-position: top;
    }

    span {
      font-size: 13px;
      margin-top: 8px;
      color:#aaa;

      white-space:normal;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .mc-list{
    display: flex;
    row-gap: 50px;
    flex-wrap: wrap;
  }

  .mc-info{
    font-size: ${(props) => props.fontsize}px;
    margin: 19px 0 5px;
  }

  .mc-card{
    white-space:normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .mc-containers .ci-subinfo{
    line-height:1.5;
    text-align: left;
    font-size: 13px;
    margin-top: 8px;
    color:#aaa;

    white-space:normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ci-writer{
    font-size: 13px;
    color: #AAAAAA;
    display: flex;
    align-items: center;
    column-gap: 14px;
    margin-top: 12px;
    
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #ececec;
    }
  }

  .articleSwiper {
    .swiper-button-prev, .swiper-button-next{
      background-color: white;
      background-size: 17px 17px;
      background-repeat: no-repeat;
      background-position: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid #aaa;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
    }
    .swiper-button-next {
      background-image: url(https://icons-for-free.com/download-icon-arrows+chevron+direction+forward+next+right+icon-1320085938847587870_0.svg);
    }
    
    .swiper-button-prev {
      background-image: url(https://static.thenounproject.com/png/1407190-200.png);
    }
    
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
  }

  // jobsfeed

  .mc-title img{
    width: 24px;
    margin: -3px 5px;
  }

  .jf-info{
    display: flex;
    align-items: center;
  }

  .jf-info img{
    width: 42px;
    height: 42px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    margin-right: 12px;
    border: 1px solid #ececec;
    border-radius: 0px;
  }

  .jf-items { 
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
  }

  .jf-items button{
    color: #002fdb;
    border-color: #002fdb;
    background-color: #fff;
    height: 40px;
    font-size: 15px;
    border: 1px solid #e1e2e3;
    padding: 11px 25.5px 12px;
    border-radius: 25px;
    font-family: pretendard;
  }

  .jf-name{
    font-size: 18px;
  }

  .jf-name span{
    font-size: 14px;
    color: #999999;
  }

  .jf-company img{
    width: 30px;
    height: 30px;
    margin-right: 8px;
    margin-top: 8px;
    border: 1px solid rgba(0,0,0,.05);
    border-radius: 0px;
  }

  .jf-title{
    margin-top: 16px;
  }

  .jf-company-name{
    font-size: 14px;
    margin: 10px 0;
  }

  .jf-reward{
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const SubscribeStyle = styled.div`
  background-color: #f7f7f7;
  padding: 60px 0;

  .subscribe-sub{
    font-size: 14px;
    margin-top: 10px;
  }

  .subscribe-container button{
      color: #fff;
      background-color: #3366ff;
      width: 260px;
      margin-top: 25px;
      height: 50px;
      font-size: 16px;
      border: none;
      border-radius: 25px;
      font-family: "pretendard";
  }

  .subscribe-container{
    margin: auto;
    width: 1060px;
    display: flex;
    justify-content: space-between;

    .subscribe-title{
      display: flex;
      font-size: 30px;

      svg{
        margin: 4px 4px 0 0;
        width: 160px!important;
        height: 31px!important;
      }
    }
  }

`;

export const RecruitmentStyle = styled.div`
  width: 1060px;
  margin: auto;
  padding: 60px 0 80px;

  .recruit-title {
    font-size: 22px;
    margin-bottom: 30px;
    text-align: center;
  }

  .recruit-container{
    border: 1px solid #ececec;
    border-radius: 4px;
    color: #333;
    display: flex;
  }

  .recruit-items{
    padding: 18px 0 0;
    border-right: 1px solid #ececec;
    width: 25%;
    text-align: center;

    svg {
      width: 32px;
    }

    .recruit-sub{
      height: 50px;
      display: flex;
      align-items: center;
      place-content: center;

      svg {
        width: 16px;
      }
    }

  }
`;

export const ModalOverlayStyle = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);

  input:focus{
    outline-color: #36f;
  }
  .modal-wrapper::-webkit-scrollbar{
    display:none;
  }
  .modal-wrapper {
    -ms-overflow-style: none;
    background-color:white;
    width: 400px;
    height: calc(100vh - 150px);
    overflow-y: auto;
    border-radius: 5px;

    .modal-icon {
      width: 100%;
      text-align: center;

      img{
        padding: 16px 20px;
      }
  
    }
  }

  .modal-container {
    padding: 20px;

    .modal-title{
      margin: 24px 0 40px;
      text-align: center;
      font-size: 26px;
      line-height: 1.5;

      #subTxt{
        font-size: 16px;
        margin-top: 16px;
        color: #666666;
      }
    }

    .modal-items{ 
      padding-bottom: ${(props) => props.paddingBottom}px;
      
      .error-message{
        color: #fe415c;
        font-size: 12px;
        margin-top: 6px;
      }

      label{
        font-size: 14px;
        color: #757676;
      }

      input,
      select{
        margin-top: 11px;
        height: 50px;
        width: 100%;
        box-sizing: border-box;
        padding: 1px 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
      }
      
    }

    #emailBtn{
      width: 100%;
      height: 54px;
      border-radius: 27px;
      border: none;
      background-color: #36f;
      font-family: 'Pretendard';
      color: white;
      font-size: 16px;
      margin-top: 14px;
    }

    .agree-text{
      margin-top: 26px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      color: #999;
      margin-top: 40px;
    }

    #modalOr{
      font-size: 14px;
      color: #767676;
      margin: 13px 0;
      text-align: center;
    }

    #modalNext{
      font-size: 14px;
      color: #767676;
      margin-bottom:17px;
      text-align: center;
    }
  }

  .signup-title{
    padding: 16px 24px;
    text-align: center;
  }

  #pwTxt{
    font-size: 12px;
    color: #767676;
    margin-top: 6px;
  }

  .number-certif{
    display: flex;
    justify-content: space-between;

    button{
      width: 117px;
      padding: 16px 15px 14px;
      border: none;
      border-radius: 5px;
      background-color: #f2f4f7;
      color: #ccc;
      height: 50px;
      margin-top: 11px;
    }

    input{
      width: 233px !important;
    }
  }

  .agree-items{
    font-size: 15px;
    height: auto;
    padding-bottom: 14px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 15px;

    input{
      margin-right: 10px;
    }
  }

  .agree-subitems{
    font-size: 15px;
    color:#939393;
    margin-bottom: 7px;

    input{
      margin-right: 10px;
    }
  }

  #signinBtn{
    width: 100%;
    height: 54px;
    border-radius: 27px;
    border: none;
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 14px;
    background-color: #36f;
    color: white;
  }
  
  #signupBtn{
    width: 100%;
    height: 54px;
    border-radius: 27px;
    border: none;
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 14px;
    background-color: #f2f4f7;
    color: #cacaca;

    position: sticky;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index: 3;
  }

  .password-modal-wrapper{
    background-color: white;
    width: 400px;
    overflow-y: auto;
    border-radius: 5px;
  }

  #passwordChange {
    font-size: 14px;
    color: #36f;
    width: 100%;
    height: 54px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
`;


export const JobsFeedStyle = styled.div`

.match-banner button{
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    color: #fefefe;
    line-height: 22px;
    border: none;
    font-family: pretendard;
}

.match-banner{
  background: #f4f8fb;
  background-image: url(https://wanted-dev.static.wanted.co.kr/banner/Jobsfeed_ai_banner.png);
  background-repeat: no-repeat;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-size: cover;
  padding-bottom: 60px;
  text-align: center;

  #mb-svg{
    width: 140px;
    margin-left: -65px;
  }
  #mb-logo{
    margin-bottom: 40px;
    margin-left: -15px;
  }
}

.mb-title{
  padding: 20px 0 10px;
}

.mb-info{
  display: flex;
  font-size: 22px;
  place-items: center;
  justify-content: center;

  img{
    height: fit-content;
  }
}

  .mb-recommend{
    color: #555;
    font-size: 16px;
    line-height: 19.2px;
    margin: 8px 0 20px;
  }

  .career-banner{
    display: flex;
    height: 150px;
    border-radius: 0;
    margin: 20px 0 60px;
    background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);

    img{
      width: 236px;
      height: 169px;
      position: relative;
      bottom: 12px;
    }
  }

  .cb-txt{
    font-size: 24px;
    line-height: 29px;
    color: #5071dc;
  }

  .cb-container button{
    height: 36px;
    font-size: 14px;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 119px;
    margin-top: 10px;
    border-radius: 25px;
    background-color: #5071dc;
    color: #fff;
    font-family: pretendard;
    border: none;
  }

  .cb-wrapper{
    display: flex;
    width: 1060px;
    align-items: center;
    margin: auto;
    justify-content: space-between;
  }

  .shortcut-navbar{
    width: 1060px;
    margin: auto;
    text-align: center;
    height: 80px;
    display: flex;

    padding: 60px 0 85px;
  }

  .shortcut-navbar button{
    border: none;
    display: flex;
    gap: 10px;
    width: 50%;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard';
    font-size: 18px;
    cursor: pointer;
  }

  .sn-left{
    background-color: #f2f5ff;
    border-top-left-radius: 38.5px;
    border-bottom-left-radius: 38.5px;
    border-left: none;
  }

  .sn-right{
    background-color: #f2fbf5;
    border-top-right-radius: 38.5px;
    border-bottom-right-radius: 38.5px;
  }
`;

export const SearchStyle = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);

  .search-wrapper{
    background-color: white;
    padding-top: 30px;
  }

  .search-container{
    max-width: 1060px;
    margin: 0 auto;
    position: relative;
  }

  input{
    box-sizing: border-box;
    height: 50px;
    width: 1060px;
    padding: 0 36px 0 60px;
    border: 1px solid #f2f4f7;
    border-radius: 25px;
    font-size: 16px;
    color: #767676;
    background-color: #f2f4f7;
    font-family: Pretendard-Thin;
  }

  .search-wrapper svg{
    position: absolute;
    top: 16px;
    left: 24px;
  }
  
  .tag-home{
    font-family:Pretendard-Thin;
    display: flex;
    align-items: center;
    color: #767676;
  }

  .tag-home svg{
    position: initial;
  }

  .search-sub{
    font-size: 14px;
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
  }

  .search-tag{
    padding: 20px 0 50px;
  }

  .search-tag button{
    height: 50px;
    font-size: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 26px;
    background-color: #f3f5f8;
    border-radius: 25px;
    border: none;
    font-family: Pretendard-Thin;
  }

  .search-wrapper input:focus{ 
    outline:none;
    border: 1px solid #36f;
    color: #333;
    background-color: #fff;
  }

  .search-tag button:hover{
    background-color: #0000000D !important;
  }
  
`;


export const TagSearchStyle = styled.div`
  .tag-container{
    padding-top: 50px;
  }

  .search-tag{
    font-size:24px;
    padding: 30px 0;
    text-align: center;
  }

  .tag-total{
    width: 200px;
    position: absolute;
    top: 84px;
    right: calc((100% - 1060px)/2);
    font-size: 14px;
    font-weight: 600;
    color: #268bf7;
    text-align: right;
  }

  .tag-button{
    width: 1060px;
    margin: auto;
    text-align: center;
    margin-bottom:24px;
  }

  .tag-button span{
    margin-right: 6px;
    font-size: 14px;
  }

  .tag-button button{
    height: 46px;
    font-size: 15px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 0 26px;
    background-color: #f3f5f8;
    border-radius: 25px;
    cursor: pointer;
    font-family:Pretendard-Thin;
  }

  .tag-button button:hover {
    background-color: #e8e8e8;
  }

  .ci-name img{
    width: 50px;
    height: 50px;
    border: 1px solid #f1f1f2;
  }

  .ci-name{
    display: flex;
    font-size: 18px;
    align-items: center;
    gap: 20px;
    color: black;
  }
  
  .ci-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;
  }

  .ci-info button{
    height: 30px;
    border-radius: 25px;
    color: #3366ff;
    padding: 7px 20px 8px;
    font-size:14px;
    border: 1px solid #e1e2e3;
  }

  .company-items{
    position: relative;
    display: block;
    float: left;
    width: calc(50% - 60px);
    background-color: white;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 20px;
    padding: 20px 20px 13px;
  }

  .company-list{
    width: 1080px;
    margin: auto;
  }

  .company-wrapper{
    display: flex;
    background-color: #f2f4f7;
    padding-bottom: 80px;
  }

  .tag-list{
    text-overflow: ellipsis;
    white-space : nowrap;
    overflow : hidden;
  }

  .tag-list span{
    font-size: 14px;
    color: #999999;
    margin-right: 12px;
    font-family: Pretendard-Thin;
  }
`;

export const CompanyDetailStyle = styled.div`
  
  .header-inner-wrapper {
    position: relative;
    padding-top: 51px;
    height: 90px;
    width: 100%;
    border-bottom: 1px solid #e1e2e3;
    background-color: #fff;

    img{
      width: 50px;
      height: 50px;
      border: 1px solid #f1f1f2;
    }
  }

  .hiw-name{
    display: flex;
    font-size: 26px;
    align-items: center;    
    gap: 15px;
  }

  .hiw-container{
    width: 1060px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }

  .hiw-container button{
    color: #002fdb;
    border: 1px solid #e1e2e3;
    height: 40px;
    font-size: 15px;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 0 27px;
  }

  .hiw-container button:hover{
    border: 1px solid #002fdb;
  }

  .company-inner-wrapper{
    display: flex;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto;
    padding: 40px 0;
  }

  .company-right-wrapper{
    width: calc(30% - 10px);
    margin-left: 20px;
    margin-right: -10px;
  }

  .company-left-wrapper{
    width: calc(70% - 20px);
    min-height: 500px;
    margin-right: 20px;
    padding-bottom: 40px;
  }

  h3{
    font-size: 22px;
    line-height: 1;
    margin: 0;
    margin-bottom: 20px;
  }

  .jp-items{
    display: block;
    position: relative;
    width: calc(50% - 20px);
    min-height: 108px;
    margin: 0 10px 20px;
    padding: 16px 20px 19px;
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    box-sizing: border-box;

    p{
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      color: #666;
      margin-top: 15px;
      margin-bottom: 0;
    }

    h5{
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
      color: #86939e;
      margin-top: 3px;
    }
  }

  .jp-title{
    width: calc(100% - 40px);
    font-size: 18px;
    line-height: 1.4;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
  }

  .jp-list{
    display: flex;
    margin: 0 -10px;
    flex-wrap: wrap;
  }

  .jobs-position-container{
    margin-bottom: 80px;

    button{
      border: 1px solid #855af0;
      color: #855af0;

      border-radius: 2px;
      font-size: 10px;
      height: 19px;
      padding: 0 5px;
      margin-left: 10px;
    }

    .jp-more-btn{
      width: 100%;
      padding: 16px;
      border-radius: 3px;
      border: 1px solid #e1e2e3;
      font-size: 16px;
      color: #999;
      height: fit-content;
      margin: 0;
      font-family: Pretendard-Thin;
    }
  }

  .icc-details{
    font-size: 16px;
    line-height: 27px;
    width: 100%;
    max-height: 81px;
    overflow: hidden;
    white-space: pre-line;
    font-family: Pretendard-Thin;
  }

  .intro-company-container button{
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #999;
    padding: 10px 0;
    font-family: Pretendard-Thin;
  }

  .intro-company-container{
    margin-bottom: 70px;
  }

  .company-right-wrapper button{
    font-size: 14px;
    line-height: 1;
    color: #333;
    border-radius: 20px;
    margin-right: 6px;
    margin-bottom: 10px;
    background-color: #f3f5f8;
    padding: 12px 16px;
    font-family: Pretendard-Thin;
  }

  #crw-more-btn{
    color: #999;
    border: 1px dashed #ccc;
    padding: 12px 16px;
    background-color: white;
  }

  .jp-items button{
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    color: #86939e;
    width: 34px;
    height: 34px;
    border: 1px solid #e1e2e3;
    border-radius: 17px;
  }

  .icc-image-list {
    position: relative;
    margin-left: -10px;
    margin-bottom: 20px;
    height: 124px;
    overflow: hidden;

    button{
      float: left;
      width: calc(25% - 10px);
      height: 100%;
      margin-left: 10px;
      padding: 0px;
    }

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .si-title{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
      margin-bottom: 0;
    }
  }

  .si-title h4{
    font-size: 13px;
    line-height: 1;
    color: #b5b5b5;
  }

  .salary-info{
    position: relative;
    border-radius: 3px;
    background-color: #f4f5f7;
    height: 72px;
  }

  .si-new{
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    display: inline-block;
    width: calc(100% - 200px);
    text-align: left;
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    color: #999;
  }
  
  .si-new-info{
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    height: 24px;

    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
  }

  .si-info{
    position: relative;
    float: left;
    height: 72px;
    width: 50%;
    text-align: center;
  }

  .salary-items{
    margin-bottom: 80px;
  }

  .si-border{
    position: absolute;
    height: 38px;
    width: 1px;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: #e1e2e3;
  }

  .size-info{
    padding: 24px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 3px;
    background-color: #f4f5f7;
  }

  .si-total{
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    vertical-align: bottom;
    color: #999;
    margin-right: 25px;
  }

  .si-total-info{
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
  }

  .cni-items{
    position: relative;
    float: left;
    width: calc(50% - 20px);
    padding: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    box-sizing: border-box;

    h4{
      margin:0;
      font-size: 16px;
      line-height: 22px;
      height: 44px;
      margin-bottom: 16px;
    }

    p{
      margin:0;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      color: #666;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-family: Pretendard-Thin;
    }
  }

  .company-news-list{
    margin-left: -20px;
  }

  .size-container{
    margin-bottom: 60px;
  }

  .type-selector-list{
    display: flex;
    position: relative;
    width: 320px;
    margin: 10px auto 0;
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px #999;
  }

  .btn-selector{
    color: #999;
    border-radius: 3px;
  }

  .btn-active-selector {
    color: #258bf7;
    border: 1px solid #258bf7;
  }

  .type-selector-list button{
    height: 100%;
    width: 33.3333333333%;
    padding: 10px;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    border-radius: 3px;
  }
`;

export const JobDetailStyles = styled.div`
  .job-detail-wrapper{
    margin: 0 auto;
    padding-top: 71px;
    width: 1060px;
    display: flex;
    justify-content: space-between;
  }

  .jdw-left-container{
    width: calc(100% - 360px);

    img{
      width: 100%;
      height: 490px;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  .jdw-right-container{
    width: 340px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    padding: 24px 20px;
    box-sizing: border-box;
    border-radius: 3px;
    height: max-content;
    position: relative;
  }

  h2{
    color: #333;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 10px;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .jdw-name-info{
    margin: 40px 0 30px;
  }

  .jdw-company-name{
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.4;
  }

  .jdw-response-level{
    border: 1px solid #855af0;
    color: #855af0;
    border-radius: 2px;
    font-size: 10px;
    height: 19px;
    line-height: 19px;
    padding: 0 5px;
  }

  .jdw-location{
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    margin-left: 10px;
    color: #999;
  }

  .jdw-sub-name {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .jdw-location {
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    margin-left: 10px;
    color: #999;
  }

  p{
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 1.75;
    font-family:Pretendard-Thin;
  }

  .jdw-tag{
    margin-right: 6px;
    margin-bottom: 10px;
    padding: 9px 14px;
    font-size: 12px;
    background-color: #f3f5f8;
    border-radius: 25px;
    line-height: 1;
    font-family:pretendard-thin;
    width: fit-content;
  }

  .jdw-tag-list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  h3{
    font-size: 15px;
    letter-spacing: normal;
    text-align: left;
    margin: 0;
  }

  h4{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #999;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .reward-info p{
    margin: 0;
    font-size: 15px;
    color: #333;
    font-weight: 600;
    font-family: Pretendard-Thin;
  }

  .reward-info-list{
    display: flex;
    align-items: center;
    margin: 24px 0;
    gap: 70px;
  }

  .warning-header-wrapper{
    padding: 25px 30px;
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 12px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #f3f5f8;
  }

  .company-info img{
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  
  .company-info h5{
    font-size: 15px;
    margin: 0 0 5px;
  }

  .company-info h6{
    margin: 0px;
    color: #999;
    font-size: 15px;
  }

  .ci-info-sub{
    display: flex;
  }

  .company-info{
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }
  
  .ci-name{
    align-self: center;
  }

  .company-info button{
    border: 1px solid #e1e2e3;
    height: 40px;
    font-size: 15px;
    color: #36f;
    padding: 0 27px;
    border-radius: 25px;
  }

  .job-workplace-wrapper>div {
    margin-bottom: 20px;
  }

  .jww-title{
    color: #999;
    width: 80px;
    font-size: 16px;
    display: inline-block;
    vertical-align: text-top;
  }

  .job-workplace-wrapper {
    margin-top: 20px;
  }

  hr{
    border: 0;
    border-top: 1px solid #eee;
  }

  h6{
    color: #333;
    font-size: 16px;
    line-height: 1.75;
    margin: 20px 0 0;
  }

  .skill-item{
    background-color: #e4f4ec;
    border-radius: 20px;
    padding: 9px 14px;
    font-size: 12px;
    font-family:Pretendard-Thin;
  }

  .skill-item-list{
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px 8px;
    margin-top: 5px;
    margin-bottom: 60px;
  }

  .bookmark-btn{
    display: flex;
    justify-content: center;
    height: 50px;
    border-radius:25px;
    border: 1px solid #36f;
    font-size: 16px;
    color: #36f;
    width: 100%;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .apply-btn{
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #fff;
    text-align: center;
  }

  .reaction-btn img{
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }

  .reactions-wrapper{
    margin-top: 24px;
    height: 30px;
    display: flex;
  }

  .reaction-like{
    display: flex;
    gap: 10px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #e1e2e3;
    margin-right: 12px;
    padding: 0 15px;
    align-items: center;
  }

  .share-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #e1e2e3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jdw-right-wrapper{
    width: 340px;
    top: 70px;
    height: fit-content;
    position: sticky;
    top: 70px;
  }

  .application-container{
    display: flex;
    background-color: #f3f5f8;
    padding: 11px 15px 10px;
    border-radius: 4px;
    justify-content: space-between;
    margin-top: 10px;
  }

  .ac-items{
    display:flex;
    font-size: 12px;
    gap: 5px;

    img{
      height: fit-content;
    }
  }

  .ac-sub{
    color: #999;
    font-size: 12px;
    font-family:Pretendard-Thin;
  }
`;