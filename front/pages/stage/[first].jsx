import Styled from 'styled-components'
import Head from 'next/head'
import {useContext} from 'react'
import Store from '../../store/context'
import {useRouter} from 'next/router'
import Router from 'next/router'
import {} from 'react-bootstrap'

const P =Styled.h1`
    margin-top:3rem;
    text-align:center;
    font-size:1.5rem;
    font-weight:800;
    width:100vw;
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
const Button = Styled.button`
    width:50vw;
    height:4vh;
    font-size:1em;
    background: #aac7f3d6;
    border-radius:1rem;
    border:0;
    margin:1vh 23vw;
    `



const first_page=()=>{

    const router=useRouter();
    let {first}= router.query;
    const {dispatch} =useContext(Store)

    let List=[
            {id:'1',
            test_page_id:'1-1',
            info:'롤상황에서',
            kakaotalk:'내가&너를&만난왜이렇게 변하는걸까 정말 어렵다 어려워다&밥집에서&뭐하게&???',
            answer1:'VARCHAR(20)',
            answer2:'VARCHAR(20)',
            answer3:'VARCHAR(20)',
            answer4:'VARCHAR(20)',
            point1:'0&11&3&12',
            point2:'0&11&3&12',
            point3:'0&11&3&12',
            point4:'0&11&3&12'
            }
        ]
    let kakao = List[0].kakaotalk.split('&')
    

    const buttonClick=()=>{
        dispatch({type:"number1",payload:{'stat1':stat1,'stat2':stat2,'stat3':stat3,'stat4':stat4}});
        Router.push(`/stage/${stat1}&${stat2}&${stat3}&${stat4}`)
    }

    return(
        <>
        <Head>
            <style>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet"/></style>
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossorigin="anonymous"
                />
        </Head>
            <div className="container">

            {List[0].info}

                {kakao.map((v,k)=>{
                    return(
                        <div key={k}>
                            {k%2===0
                            ?<div className="content_box"><div className="right_content" key={k}>
                            {v} 
                        </div></div>
                        :<div className="content_box"><div className="left_content" key={k}>
                            {v} 
                        </div></div>    
                    }
                        </div>
                    )
                })}
                <Button onClick={()=>{buttonClick()}}>{List[0].answer1}</Button>
                <Button onClick={()=>{buttonClick()}}>{List[0].answer2}</Button>
                <Button onClick={()=>{buttonClick()}}>{List[0].answer3}</Button>
                <Button onClick={()=>{buttonClick()}}>{List[0].answer4}</Button>
                <div>
                    <button>prev</button>
                    <button>next</button>
                </div>
            </div>
        </>
    )
}


export default first_page