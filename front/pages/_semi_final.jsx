import Link from 'next/link'
import Styled from 'styled-components'

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
    return(
        <>
            <P>테스트가 끝났습니다.</P>
            <Span>결과보기 버튼을 눌러 결과를 확인하세요</Span> 
            <Button href="/"><a>결과보기</a></Button>
        </>

    )
}

export default final_page