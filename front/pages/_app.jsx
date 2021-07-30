import '../css/index.css'
import Store from '../store/context'
import {useReducer,useContext} from 'react'
import reducer from '../store/reducer'
import Head from 'next/head'
const App=({Component})=>{
    const globalContext=useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true}/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
            />
        </Head>
        <Store.Provider value ={{state,dispatch}}/>
            <Component/>{/*우리가 만든 모든 것이 components에 위치한다.  */}
        <Store.Provider/>
        </>
    )
}
export default App