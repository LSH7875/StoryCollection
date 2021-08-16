import Link from 'next/link'
import Styled from 'styled-components'
import {useContext} from 'react'
import Store from '../store/context'
import Router from 'next/router'

const Button = Styled.button`
    position:absolute;
    top:60%;
    left:50%;
    transform:translateX(-50%);
    width:50vw;
    height:10vh;
    font-size:1em;
    background: #aac7f3d6;
    border-radius:1rem;
    border:0;
    `
const Span = Styled.p`
position:absolute;
top:45%;
left:50%;
transform:translateX(-50%) translateY(-30%);
width:50vw;
height:10vh;
text-align:center;
`
const P = Styled.p`
    position:absolute;
    top:25%;
    left:50%;
    transform:translateX(-50%) translateY(-30%);
    width:70vw;
    height:10vh;
    font-size:2rem;
    text-align:center;
    `

const final_page=()=>{
    
    const {dispatch,state} =useContext(Store)

    let {List} =state; 
    const list = List[0];
    console.log('list',list)
    const idarr = list.id.split("-");
    console.log('idarr',idarr)
    const id = idarr[0];
    // let List=[{id:1-1,stat1:10,stat2:1,stat3:5,stat4:20},
    //     {id:1-2,stat1:20,stat2:1,stat3:5,stat4:20},
    //     {id:1-3,stat1:30,stat2:1,stat3:5,stat4:20},
    //     {id:1-4,stat1:10,stat2:1,stat3:5,stat4:20},
    //     {id:1-5,stat1:20,stat2:1,stat3:5,stat4:20}]
    // console.log('인덱스의 List는?',List)
    let stat1=0,stat2=0,stat3=0,stat4=0;
    List.map(v=>{
            stat1+=parseInt(v.stat1);
            stat2+=parseInt(v.stat2);
            stat3+=parseInt(v.stat3);
            stat4+=parseInt(v.stat4);
    })
        
    console.log(stat1,stat2,stat3,stat4)
    

    const buttonClick=()=>{
        console.log('버튼눌림')
        dispatch({type:"SUMSTAT",payload:{'stat1':stat1,'stat2':stat2,'stat3':stat3,'stat4':stat4}});
        Router.push(`/result/${id}&${stat1}&${stat2}&${stat3}&${stat4}`)
            
    }
    
    return(
        <>
            <P>테스트가 끝났습니다.</P>
            <Span>결과보기 버튼을 눌러 결과를 확인하세요</Span> 
            <Button onClick={()=>buttonClick()}><a>결과보기</a></Button>
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

export default final_page