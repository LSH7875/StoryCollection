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
    height:5vh;
    display:block;
    font-size:1em;
    background: yellow;
    border-radius:14px;
    border:0;
    margin:0 auto 10px auto ;
    font-weight:600;
    `


const first_page=()=>{

    const router=useRouter();
    let {first}= router.query;

    let stage_step=String(first);
    let stagenum=stage_step.split("-")[0]
    let stepnum=stage_step.split("-")[1]
    console.log('stepnum',stepnum)
    const {dispatch} =useContext(Store);
    
    // if(stepnum===1){
    //     dispatch({type:"INITIALIZE"})
    // }
    let List=[
            {id:'1',
            test_page_id:'1-1',
            info:'롤상황에서만약 당신이 정글의 무빙과 함께 블라블라블라블라블라블라블라블라블라블라블라블라',
            kakaotalk:'내가&너를ㅁ니ㅏ럼ㄴ;ㅣ러ㅏㅁ니;런ㅁ;ㅣ라ㅓㅁ니;러&만난왜이렇게 변하는걸까 정말 어렵다 어려워다&너정말 쓰레기구나&휴...&밥집에서&뭐하게&???',
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
    let kakao = List[0].kakaotalk.split('&');
    


    let {answer1,answer2,answer3,answer4} = List[0];
    let point1=List[0].point1.split('&');
    let point2=List[0].point1.split('&');
    let point3=List[0].point1.split('&');
    let point4=List[0].point1.split('&');
    let maparr = [{answer:answer1,point:point1},{answer:answer2,point:point2},{answer:answer3,point:point3},{answer:answer4,point:point4}]
    

    const buttonClick=(point)=>{
        dispatch({type:"PLUS_STAGE",payload:{'id':first,'stat1':point[0],'stat2':point[1],'stat3':point[2],'stat4':point[3]}});
        if(stepnum==="5"){
            router.push(`/`);
        }else{
            const aa=parseInt(stepnum)+1;
            const bb=String(`${stagenum}-${aa}`);
            router.push(`/test/${bb}`);
        }
    }

    function pagemove(page){
        if(stepnum==="5"&&page==="nextpage" ){
            router.push(`/`);
        }else if(page==="nextpage"){
            console.log(stepnum);
            const aa=parseInt(stepnum)+1;
            const bb=String(`${stagenum}-${aa}`);
            console.log('bb',bb);

            router.push(`/test/${bb}`);
        }else{
            const aa=parseInt(stepnum)-1
            const bb=String(`${stagenum}-${aa}`);
            router.push(`/test/${bb}`)
        }
    }

    const imgUrl="/draven1.jpg"

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

            <div className="info_css">{List[0].info}</div>

                {kakao.map((v,k)=>{
                    return(
                        <div key={k}>
                            {k%2===1
                            ?<div className="content_box"><div className="right_content" key={k}>
                            {v} 
                        </div></div>
                        :<div className="content_box">
                            <div className="left_img">
                                <img className="img_size" src={imgUrl} />
                            </div>
                            <div className="left_content" key={k}>
                            {v} 
                            </div>
                        </div>    
                    }
                        </div>
                    )
                })}
                {maparr.map((v,k)=>{
                    return (
                        <Button key={k} onClick={()=>{buttonClick(v.point)}}>{v.answer}</Button>
                    )
                })}
                
                <div>
                    {stepnum==1?'':<div className="prevpage_css" onClick={()=>pagemove()}>prev</div>}
                    <div className="nextpage_css" onClick={()=>pagemove("nextpage")}>next</div>
                </div>
            </div>
        </>
    )
}


export default first_page