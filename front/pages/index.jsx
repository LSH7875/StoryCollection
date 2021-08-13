import Styled from 'styled-components'
import Head from 'next/head'
import {useRouter} from 'next/router'


const P =Styled.h1`
    margin-top:3rem;
    text-align:center;
    font-size:1.5rem;
    font-weight:800;
    width:100%;
    height:5vh;
    margin-bottom:2rem;
    font-family: 'Noto Sans KR', sans-serif;

`
const ResultInform = Styled.div`
    position:relative;
    top:2em;
    width:100%;
    padding-left:10%;
`
const start_page=()=>{


    const router=useRouter();
    
    return(
        <>
        <Head>
            <style>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet"/></style>
        </Head>
             
            <div className="container_index">
                <div className="cup_box">   
                    <div className="cup">
                        <div className="cup_button" onClick={() => router.push('/test/1-1')}>잼민이테스트</div>
                    </div>
                </div>

                <div className="cup_box">   
                    <div className="cup2">
                    <div className="cup_button" onClick={() => router.push('/test/2-1')}>호구테스트</div>
                    </div>
                </div>

                <div className="cup_box">   
                    <div className="cup3">
                    <div className="cup_button" onClick={() => router.push('/test/3-1')}>정치력테스트</div>
                    </div>
                </div>
            </div>
    
            <div className="introduce_text"> 4가지 항목중 원하는 답을 고른후 아래에 있는 NEXT 버튼을 눌러주세요 </div>            
            
        </>

    )
}

export default start_page