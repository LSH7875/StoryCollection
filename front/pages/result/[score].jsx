import Styled from 'styled-components'
import Graph from '../../components/Graph1'
import Head from 'next/head'
import {useContext,useEffect} from 'react'
import Store from '../../store/context'
import {useRouter} from 'next/router'
import KakaoLink from '../../components/KakaoLink2'
import  Link  from 'next/link'



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
    background:blue;
    text-align:center;
    height:8vh;
    padding-top:2.3vh;
    left:50%;
    >Link{
        
    }


                `



const result_page=()=>{

    const {dispatch} = useContext(Store);
    const router=useRouter();
    
    //주소창으로 받은 값을 점수로 쓰기 위해 배열로 반환하는 과정

    let {score}=router.query;
    let bb=String(score);
    let query=bb.split('&');
    let query1=query.slice();
    let arr = query1.sort(function(a,b){
        return b-a;
    })
    let highscore=arr[0];//제일 높은 점수

    // score점수가 바뀔 때 dispatch를 보냄(1번째 받는 score값은 undefined이고 2번째 받는 score값에는 query가 제대로 담김)
    useEffect(async()=>{
        dispatch({type:"SUMSTAT",payload:{'stat1':query[1],'stat2':query[2],'stat3':query[3],'stat4':query[4]}});
        let aa = await axios.post(`http://localhost:3000/result/${score}`);
        console.log('axios값:',aa);
    },[score])


    
    //css-style
    const linkstyle={
        overflow:'hidden',
        display:"block",
        width:'22px',
        height:'22px',
        marginLeft:"50%",
    }
    const listStyle={
        // display:'block',
        // left:"50%",
        // textAlign:"center"
    }
    const graph={
        display:"relative",
        width:"100%",
        height:"80vh",
        overflow:"hidden"
    
    }
    
        


    return(
        <>
        <Head>  
            <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
            <style>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet"/>
            </style>
        </Head>
             <P>🌟당신은 호구입니다.🌟</P>
            <div style ={{"width":"100%","textAlign":"center"}}><h1>호구력 {highscore}%</h1></div>
            
            <Graph style = {graph} value={query}/>
            
            <ResultInform>어쩌구 저쩌구한 당신은 진정한 호구입니다.
                sfdgsdfgsdfgsdfg
                sdfgsdfgsdfdasfasdfasdfa
                adfasdfasdfasdfasdfasdfasdfasdfasdfasdf
            </ResultInform>
            <p style={{textAlign:"center"}}>공유하기</p> 
            <KakaoLink value ={score} style = {linkstyle}/>
            <List><Link href="/main" style={listStyle}><a>목록가기</a></Link></List>
        </>

    )
}

export default result_page