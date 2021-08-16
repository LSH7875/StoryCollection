import Styled from 'styled-components'
import Head from 'next/head'
import {useContext} from 'react'
import Store from '../../store/context'
import {useRouter} from 'next/router'
import Router from 'next/router'
import {} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
    width:65vw;
    height:5vh;
    display:block;
    font-size:1em;
    background: yellow;
    border-radius:14px;
    border:0;
    margin:0 auto 10px auto ;
    font-weight:600;
    `
    


const first_page=({data})=>{

    

    const {dispatch,state} =useContext(Store);
    
    const router=useRouter();
    let {first}= router.query;
    

    if(!first) return(<></>)


    
    let stage_step=String(first);
    let stagenum=stage_step.split("-")[0]
    let stepnum=stage_step.split("-")[1]
    
    const aab = {...state.List[stepnum-1]};

    let step_key=  Infinity; 

    let kakao;
    if(data.kakaotalk){kakao=data.kakaotalk.split('&')}

    

    
    
    let {answer1,answer2,answer3,answer4} = data;
    let point1=data.point1.split('&');
    let point2=data.point1.split('&');
    let point3=data.point1.split('&');
    let point4=data.point1.split('&');
    let maparr = [{answer:answer1,point:point1},{answer:answer2,point:point2},{answer:answer3,point:point3},{answer:answer4,point:point4}]
    
   

    const buttonClick=(point,buttonkey)=>{
        dispatch({type:"PLUS_STAGE",payload:{num:stepnum,List:{'id':first,'key':buttonkey,'stat1':point[0],'stat2':point[1],'stat3':point[2],'stat4':point[3]}}});
        if(stepnum==="5"){
            // router.push(`/before_result`);
        }else{
            const aa=parseInt(stepnum)+1;
            const bb=String(`${stagenum}-${aa}`);
            // router.push(`/test/${bb}`);
        }
    }

    function pagemove(page){
        if(stepnum==="5"&&page==="nextpage" ){
            router.push(`/before_result`);
        }else if(page==="nextpage"){

            const aa=parseInt(stepnum)+1;
            const bb=String(`${stagenum}-${aa}`);

            router.push(`/test/${bb}`);
        }else{
            const aa=parseInt(stepnum)-1
            const bb=String(`${stagenum}-${aa}`);
            router.push(`/test/${bb}`)
        }
    }
    /* 서버와 연결 했을 때 작동하는지 확인해봐야함
    let [css,css_change] = useState(List)

    useEffect(()=>{
        css_change(List)
    })
    */
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

            <div className="bubble">
                <div className="info_css">{data.info}</div>
            </div>

                {kakao?
                    kakao.map((v,k)=>{
                        return(
                            <div key={k}>
                                {k%2===1
                                    ?v.split("/").map((v,k)=>{
                                        return(
                                            <div className="content_box">
                                                <div className="right_content" key={k}>
                                                    {v} 
                                                </div>
                                            </div>
                                        )
                                    })
                                    :v.split("/").map((v,k)=>{
                                        return(
                                            <div className="content_box">
                                                <div className="left_img">
                                                    <img className="img_size" src={imgUrl} />
                                                </div>
                                                <div className="left_content" key={k}>
                                                    {v} 
                                                </div>
                                            </div>    
                                        )
                                    })
                                }
                                
                            </div>
                        )
                    })
                :''
                }
                
                {maparr.map((v,k)=>{
                    return (
                        k===aab.key?
                        <Button style ={{background:"#333333", color:"#ffffff"}}key={k} onClick={()=>{buttonClick(v.point,k)}}>{v.answer}</Button>
                        :<Button key={k} onClick={()=>{buttonClick(v.point,k)}}>{v.answer}</Button>
                        )
                })}
                
                <div className="button_box">
                    {stepnum==1?'':<div className="prevpage_css" onClick={()=>pagemove()}>prev</div>}
                    <div className="nextpage_css" onClick={()=>pagemove("nextpage")}>next</div>
                </div>
            </div>
        </>
    )
}


export async function getServerSideProps({params}){
    const res = await axios.post(`http://testcollector.shop:3000/test/${params.first}`)
    const data = res.data.TPT
    return{ props : {data:data} }
}

export default first_page