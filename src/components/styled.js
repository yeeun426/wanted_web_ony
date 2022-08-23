import styled from "styled-components";

export const CareerInsightStyle = styled.div`
  padding: 60px 0;
  max-width: 1060px;
  text-align: center;
  margin: auto;

  .ci-swiper {
    display: flex;

    .swiper-wrapper{
      margin: 30px 0;
    }
    .swiper-button-prev, .swiper-button-next{
      background-color: white;
      background-size: 17px 17px;
      background-repeat: no-repeat;
      background-position: center;
      width: 28px;
      height: 28px;
      border: 50%;
      border-radius: 50%;
      border: 0.5px solid rgb(0 0 0 / 0.3);  
    }

    .swiper-button-next {
      background-image: url("../imgs/arrownext.JPG");
    }
    
    .swiper-button-prev {
      background-image: url("../imgs/arrowprev.JPG");
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
    padding: 0 29px;
    height: 50px;
    font-size: 15px;
    border: 1px solid #f2f4f7;
    background-color: #f2f4f7;
    font-family: "Pretendard";
    white-space: nowrap;
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
`;

export const MainContainerStyle = styled.div`
  padding: 60px 0;
  width: ${(props) => props.widthtotal || 1060 }px;
  margin: auto;

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

  .modal-wrapper {
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
      label{
        font-size: 14px;
      }

      input{
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

`
