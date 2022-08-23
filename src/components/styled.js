import styled from "styled-components";

export const CareerInsightStyle = styled.div`
  padding: 60px 0;
  max-width: 1060px;
  text-align: center;
  margin: auto;

  .ci-swiper {
    display: flex;
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
  width: 1060px;
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
      margin: 8px;

    img{
      border-radius: 4px;
      width: 100%;
      height: ${(props) => props.height}px;
      object-fit: cover;
    }
  }

  .mc-list{
    display: flex;
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
