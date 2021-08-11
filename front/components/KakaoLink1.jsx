import React from 'react';
import { KakaoLinkDefault} from "react-kakao-link"

const App=({score})=>{
  console.log('score',score)
  // console.log('window',window)
  const template = {
    objectType: "feed",
    content: {
      title:"심리테스트",
      description: "#심테 #심리테스트 #꿀잼",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        mobileWebUrl: window.location.herf,
        webUrl: window.location.herf,
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: window.location.herf,
          webUrl: window.location.herf,
        },
      },
    //   {
    //     title: "앱으로 보기",
    //     link: {
    //       mobileWebUrl: "https://developers.kakao.com",
    //       webUrl: "https://developers.kakao.com",
    //     },
    //   },
    ],
  }

  return (
    <div>
        <KakaoLinkDefault
          className="template"
          template={template}
          jsKey={"3e726fb09fc5c9a9171365e3ecf128a9"}
        >
          <button>카카오링크 디폴트 템플릿</button>
        </KakaoLinkDefault>
    </div>
  )
}

export default App;