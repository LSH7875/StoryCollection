import Styled from 'styled-components'
import Head from 'next/head'

const P = Styled.h1 `
    margin-top:3rem;
    text-align:center;
    font-size:1.5rem;
    font-weight:800;
    width:100%;
    height:5vh;
    margin-bottom:2rem;
    font-family: 'Noto Sans KR', sans-serif;

`
const ResultInform = Styled.div `
    position:relative;
    top:2em;
    width:100%;
    padding-left:10%;
`


const start_page = () => {

    return (
        <> 
            < Head > 
                <style>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap"
                          rel="stylesheet"/>
                </style>
            </Head>

            
                
      
    
        
            
        
        </>

    )
}

export default start_page