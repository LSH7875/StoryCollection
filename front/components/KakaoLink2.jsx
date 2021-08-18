import React, { useEffect } from 'react'
import Styled from 'styled-components'

const KakaoShare =Styled.div`
    position:relative;
    left:calc(50%-60px);


    ` 

const Modal = Styled.div`
width:200px;
height:120px;
background:#ecedef;
`
const IMG = Styled.img`
width:50px;
height:50px;
object-fit:cover;
`
const BUTTON = Styled.button`
  border:0px;
`



const KakaoShareButton = ({uri}) => {
  useEffect(() => {
    createKakaoButton()
  }, [])

  handleClick=()=>{
    kakaoSend=true;
    setTimeout(()=>{
      kakaoSend=false;
    },1000)
  }


  const createKakaoButton = () => {


    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.NEXT_PUBLIC_API_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '카톡 심리테스트',
          description: '#카톡 심리테스트 #재밌는 심리테스트 #심테',
          imageUrl: 'https://lh3.googleusercontent.com/XVgISnvwrl5PzFmAcWJpbNb7xuaGldbjC2J7t56Xs8kit-ElY-Rl2F2hbySJ6ERcbgk', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl:`http://testcollector.shop/result/${uri}`,
            webUrl: `http://testcollector.shop/result/${uri}`,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '친구의 결과보기',
            link: {
              mobileWebUrl: `http://testcollector.shop/result/${uri}`,
              webUrl:`http://testcollector.shop/result/${uri}`,
            },
          },
          {
            title: '테스트 하기',
            link: {
              mobileWebUrl: `https://play.google.com/store/apps/details?id=com.DREAM_YUYU.kakao_psychologicaltest`,
              webUrl: `https://play.google.com/store/apps/details?id=com.DREAM_YUYU.kakao_psychologicaltest`,
            },
          },
        ],
      })
    }
    }
  return (
    <KakaoShare>
      {kakaoSend?
      <Modal id="kakao-link-btn">카카오 링크를 보내는 중입니다. </Modal>:''}
      {/* Kakao share button */}
      <BUTTON onClick={handleClick}>
        <IMG src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="kakao-share-icon" />
      </BUTTON>
    </KakaoShare>

  )
}
export default KakaoShareButton