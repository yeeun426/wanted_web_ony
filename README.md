# 원티드 (클론코딩)
--------------
## Project Purpose
> 본 프로젝트는 라이징캠프 서버 개발자분들과 협업하여 원티드를 클론코딩하였다.
> <br/>제작기간은 22-08-20 ~ 2022-09-02로 2주이다.
--------------
## Project Idea
> 본 프로젝트에서는 직접 실제 API와 api 작동 확인을 위해 Postman을 사용하며 서버개발자들과 소통할 수 있는 경험이었다.<br/>
> 처음으로 개발자가 만든 api를 연동시키는 연습을 할 수 있었다. <br/>
> api 명세서를 보면서 서버 개발자분들과 소통하며 프로젝트를 진행했다.
--------------
## Learn
> [swiper]
> - 스와이프 기능이 있는 슬라이드를 만들기 위해 Swiper 라이브러리를 사용했다.
> - SwiperCore를 사용하여 스와이프 동작과 같은 핵심기능을 가져와 구현하였다.
> - Swiper 컴포넌트를 사용하며 Swiper 컴포넌트 내부에 SwiperSlide는 각각의 슬라이드를 나타낸다. 이 안에서 데이터를 매핑하여 각 슬라이드를 렌더링하도록 했다.
> - 이러한 기능들을 활용하여 자동재생 및 네비게이션 기능을 사용할 수 있었다.
>
> [styled-components]
> - css스타일링은 styled-components를 사용하여 구현하였다.
>
> [모달창 구현]
> - props를 매개변수로 받아 모달창이 켜졌을 때와 꺼졌을 때를 구분시킨다.
> - useEffect를 이용해 컴포넌트가 마운트될 때 페이지 스크롤 위치를 고정하고 스크롤이 생기지 않도록 한다.
> - 스크롤이 고정된 상태에서 컴포넌트가 언마운트될 때, 스크롤 위치를 원래대로 복원시켰다.
>   
> [index 하드코딩 된 부분 더미데이터로 컴포넌트]
> - 하드코딩 된 코드를 모두 더미데이터로 빼내어 컴포넌트화 시켜줌으로써 반복되는 코드를 짧게 줄일 수 있었다.
>
> [버튼 hover]
> - 버튼에 마우스 커서를 가져가면 효과가 나타나도로고 :hover를 이용해 css로 효과를 주었다.
> 
> [로그인 회원가입 api 연결]
> - useState 훅을 사용하여 email, signup, passwordPage를 관리하며 emailValid로 이메일 유효성을 나타냈다.
> - 회원가입 요청은 axios.post 메서드를 이용해 서버에서 받은 응답을 처리하며 요청이 실패할 경우 오류를 처리한다.
> - 이메일 유효성 검사는 axios.get()메서드를 사용하여 구현하였다.
> - 로그인(ClickLogin)은 axios.post() 메서드를 사용하여 email, password를 body로 전달하여 post요청을 보낸다.
> - axios를 사용하여 간단하게 HTTP 요청을 처리하였으며 promise 기반의 구조로 비동기 작업을 구현하였다.
>
--------------
## PAGES
> [메인화면]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/0e306e23-1fe7-4291-adaa-346496bdfc6c)
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/5cb25f13-b003-4c84-9a83-a043dfd254c2)
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/edee3e44-b524-422f-9339-cfe6af95a5bb)
>
> [검색]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/def9c17c-adef-4f07-bfc8-32b76c9867c7)
>
> [검색 세부]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/1d80762a-9e36-4d1c-bd24-e74f85d788a1)
>
> [기업 세부]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/3096a9bc-8708-4c49-985e-f13851d0a806)
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/cf082aa9-fb1d-4731-aaa6-f20e09f764b6)
>
> [로그인]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/621a273d-dbdf-4f96-8d0a-4205d3d378e7)
>
> [회원가입]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/dbdd6b4b-6236-4d14-b2bf-cdfee586781a)
>
> [북마크]
> ![image](https://github.com/yeeun426/wanted_web_ony/assets/88296511/6f41219e-1890-420b-a5a6-d3b63e42fc31)
>
--------------
## Current Folder Structure
> #### 🗂 src/atoms
> > ⌙리코일을 사용하는 코드를 담아두고있다.
> #### 🗂 src/components
> > ⌙공통 컴포넌트들을 포함하고있다.
> #### 🗂 src/data
> > ⌙api를 넣기 전에 테스트하기 위한 더미데이터를 담아두고있다.
> #### 🗂 src/imgs
> > ⌙구현에 필요한 이미지 파일들을 포함하고 있다.
> #### 🗂 src/pages
> > ⌙웹 상의 모든 페이지들이 있다.
> #### 🗂 src/routes
> > ⌙페이지 간의 이동을 담은 코드를 담아두고 있다.
> #### 🗂 src/utils
> > ⌙소셜로그인에 필요한 데이터들을 담고있다.
-------------
## Project Preview
> 시현 영상 <br>
https://drive.google.com/drive/folders/1kqTYssxoAYglwE3fiOZ2iuflulpIJ2lV
<br>(코로나 확진으로 인해 목상태가 좋지 않습니다.)
-------------
## Project Environment
> > <img src = "https://user-images.githubusercontent.com/88296511/217285156-6deaeb5d-38cf-4311-a529-cb6534d53c7f.png" width="250" height="150">
>
-------------
## Organizer
> 라이징캠프
>
-------------
## Project Role
> frontend, publisher : yeeun426
>
-------------
## Source
> 원티드 이미지 그대로 사용
>
-------------
## Design
> 원티드 https://www.wanted.co.kr/
>
-------------
## Plan
### 2022-08-20 토 진행상황
+ 개발환경 세팅
+ 기획서 확인
+ 개발해야 할 페이지들 확인해서 계획

### 2022-08-21 일 진행상황
+ header 컴포넌트 구현
+ swiper 컴포넌트 구현
+ 메인 페이지 화면 퍼블리싱
+ footer 컴포넌트 구현

### 2022-08-22 월 진행상황
+ 메인 페이지 화면 퍼블리싱 구현

### 2022-08-23 화 진행상황
+ 로그인, 회원가입 모달 구현

### 2022-08-24 수 진행상황
+ index 하드코딩 된 부분 더미데이터로 빼서 컴포넌트로 만들기
+ 데이터 이용해서 swiper 구현
+ 채용 리스트 페이지 구현
### 2022-08-24 피드백
+ 2주차에 기능 구현할 수 있도록 첫주차에 최대한 많은 페이지 퍼블리싱해두기
+ 로그인했을 때 이용가능 서비스와 안했을 때 이용가능 서비스 구별하기
+ navbar밑에 active한 버튼 css 넣기

### 2022-08-25 목 진행상황
+ 회사 리스트 페이지 구현

### 2022-08-25 목 진행상황
+ 회사 리스트 페이지 구현

### 2022-08-26 금 진행예정
+ 지금까지 구현 페이지 미흡한 부분 보완
+ navbar 밑에 active한 버튼 css넣기
+ swiper 데이터 페이지마다 다른거 구별하기
+ 필터 사이 간격 일정하게 맞추기
+ /tagsearch
+ 리코일 이용해서 연결시키기
+ 더미데이터 만들어서 필터링 시키기
+ 전체보기(닫기) 구현
+ 애니메이션 넣기
+ 태그 선택 안되어있을 때 UI
+ 버튼 오버시 효과넣기
+ 폰트 얇은것도 font-face해서 얇게 써야되는 부분 변경

### 2022-08-27 토 ~ 28 일 진행예정
+ 밀린부분 + 보완할 부분 보완

### 2022-08-29 월 진행상황
+ 회사 설명 페이지 구현

### 2022-08-30 화 진행상황
+ 로그인 회원가입 API 연결
+ 카카오 로그인 API 연결
+ 채용 지원하기 페이지 구현

### 2022-08-31 수 진행상황
+ 회사 설명 페이지 애니메이션 효과 구현
+ API 연결

### 2022-08-31 피드백
+ wanted 아이콘 다운받아서 favicon.icon 설정해보기
+ index.js에서 title바꾸기
+ 보통 : 지금 만든 페이지+기능
+ 우수 : 피드백 받은페이지 + 기능 -> 중상
+ 로그인되면 메뉴바에 북마크 페이지
+ 원래 채용컴포넌트 가져와서 북마크 됐을 때 페이지
+ 페이지 수 -> 체용페이지 -> 북마크
+ 이력서 페이지
+ 로그인 유무에 따라 페이지가 다름
+ 기능적인 부분 구현
+ API 연결
+ 명세서에 얼마나 반영했는지 엑셀에 체크해서 같이 제출
+ 회원가입 전체 동의 체크시 전체 동의

### 2022-09-01 목 진행상황
+ 북마크 페이지
+ 로그인 세션유지
+ 채용
+ header
+ 이력서
+ company/ 회사의 연봉과 인원을 보고 싶다면?
+ API 연동
+ 회원가입 전체 동의

#### 회원가입시 보이는 부분
+ www.wanted.co.kr/company/97 -> 회사의 연봉과 인원을 보고 싶다면?
+ navbar 회원가입/로그인 -> 마이페이지 아이콘
+ /cv/intro 원티드 이력서 작성하기 -> 로그인
+ 채용 페이지 -> 합격률이 높은 포지션

#### 체크 해야할 부분(0825기준)
+ swiper arrow 버튼 위치
+ swiper컴포넌트 더미데이터로 빼서 navbar 이동할 때마다 다른 data뜨게 하기

'본 템플릿의 저작권은 (주)소프트스퀘어드에 있습니다. 상업적 용도의 사용을 금합니다'
