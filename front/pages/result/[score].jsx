import Styled from 'styled-components'
import Graph from '../../components/Graph1'
import Head from 'next/head'
import {useContext,useEffect,} from 'react'
import Store from '../../store/context'
import {useRouter} from 'next/router'
import KakaoLink from '../../components/KakaoLink2'
import  Link  from 'next/link'
import axios from 'axios'


const P =Styled.h1`
    margin-top:3rem;
    text-align:center;
    font-size:1.5rem;
    font-weight:800;
    width:100%;
    height:5vh;
    margin-bottom:2rem;
    font-family: 'Noto Sans KR', sans-serif;
    padding:5px;
    

`
const ResultInform = Styled.div`
    position:block;
    top:2em;
    width:100%;
    padding-left:10%;
    margin-bottom:1em;
    margin-top:1em;
`

const List = Styled.div`
    display:block;
    width:100%;
    background:#FFEB33;
    text-align:center;
    height:8vh;
    padding-top:2.3vh;
    left:50%;
    margin-top:2em;
    >Link{
        
    }`

const Review = Styled.div`
    display:inline-block;
    width:50px;
    height:50px;
    background:black;
    border-radius:0.5em;
    color:white;
    background:url('/review.png');
    background-size:contain;
`

const Center = Styled.div`
    display:inline-block;
    text-align:center;
`
const Ul = Styled.ul`
    display:flex;
    flex-direction:row;
    justify-content: center;
    padding:0;
    margin-bottom:0;
    &>li{
        list-style:none;
        margin:1em;
    }
`

const Li = Styled.li`
    font-weight:bold;
    text-align:center; 
    margin-bottom:-1em !important;
` 
const Playstore = Styled.div`
    display:inline-block;
    width:50px;
    height:50px;
    background:black;
    border-radius:0.5em;
    color:white;
    background:url('/playstore.png');
    background-size:contain;
`
const result_page=({query,data,highscore,uri})=>{
    let popup;
    const router=useRouter();
    let url = `http://testcollector.shop/result/${query}`;
    //주소창으로 받은 값을 점수로 쓰기 위해 배열로 반환하는 과정
    const query1=query.map(v=>{
        return parseInt(v)
    })
    let {score}=router.query;
    
    const {dispatch} = useContext(Store);
    
    // score점수가 바뀔 때 dispatch를 보냄(1번째 받는 score값은 undefined이고 2번째 받는 score값에는 query가 제대로 담김)
    useEffect(async()=>{
        dispatch({type:"SUMSTAT",payload:{'stat1':query[1],'stat2':query[2],'stat3':query[3],'stat4':query[4]}});
        setTimeout(()=>{
            popup=true;
            console.log('5초지남')
        },5000);
    },[])

    let testname;
    if(query[0]==1){
        testname="틀딱"
    } else if(query[0]==2){
        testname="호구력"
    } else if(query[0]==3){
        testname="정치력"
    }

    //stat들 모음
    let statArr = [data.stat1,data.stat2,data.stat3,data.stat4];
    console.log('arr',statArr)
    
    //css-style
    const linkstyle={
        position:"inline-block",
        width:"50px",
        height:"50px",
        overflow:'hidden',
        float:"left",
        paddingBottom:"2vh"
    }
    const listStyle={
        display:'inline-block',
        background:'yellow',
        marginTop:'2em'
    }
    const graph={
        display:"relative",
        width:"100%",
        height:"80vh",
        overflow:"hidden"
    
    }
    console.log('highscore',highscore);
    
    

    return(
        <>
        <Head>  
        
        <script data-ad-client="ca-pub-6661020916106903" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        
            <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
            <style>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet"/>
            </style>
            <meta property="og:title" content="카톡심리테스트" />
            <meta property="og:description" content="카톡으로 알아보는 재미있는 심리테스트" />
            <meta property="og:image" content="https://lh3.googleusercontent.com/XVgISnvwrl5PzFmAcWJpbNb7xuaGldbjC2J7t56Xs8kit-ElY-Rl2F2hbySJ6ERcbgk" />
        </Head>
            <P>🌟{data.result_subject}🌟</P>
            <div style ={{"width":"100%","textAlign":"center"}}>
                <h1>{testname} {query[0]==2? 100-highscore : highscore}%</h1>
            </div>
            
            <Graph style = {graph} value={query1} statArr={statArr}/>
            
            <ResultInform><h2></h2>
            <div style={{textAlign:"center", paddingRight:"10%"}}>{data.result_content}</div>
            </ResultInform>
            <Ul >
            <li style = {{fontWeight:"bold",textAlign:"center" }}>공유하기</li>
            <li style = {{fontWeight:"bold",textAlign:"center" }}>리뷰쓰기</li>
            <li style = {{fontWeight:"bold" ,textAlign:"center" }}>어플다운</li>  
        
            </Ul>
            <Ul >
                <li>
                    <KakaoLink uri ={uri}/>
                </li>
                <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.DREAM_YUYU.kakao_psychologicaltest">
                        <a>
                            <Review/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.DREAM_YUYU.kakao_psychologicaltest">
                        <a>
                            <Playstore/>
                        </a>
                    </Link>
                </li>
            </Ul>
            <List><Link href="/" style={listStyle}><a style={{color:"black" , fontWeight:"600",textDecoration:"none"}}>목록가기</a></Link></List>
            <amp-ad width="100vw" 
                    height="320"
                    type="adsense"
                    data-ad-client="ca-pub-6661020916106903"
                    data-ad-slot="3501181296"
                    data-auto-format="rspv"
                    data-full-width="">
                <div overflow=""></div>
            </amp-ad>
        </>

    )
}

export async function getServerSideProps({params}){
    let query=params.score.split('&');
    let query1=[query[1],query[2],query[3],query[4]]
    let arr = query1.sort(function(a,b){
        return b-a;
    })
    let highscore;
    query[0]==2?highscore=arr[3]:highscore=arr[0];//제일 높은 점수
    const res = await axios.post(`http://testcollector.shop:3000/result/${query[0]}-${highscore}`)
    const data = res.data.result;
    return{ props : {query:query, data:data , highscore:highscore, uri:params.score} }
}


export default result_page