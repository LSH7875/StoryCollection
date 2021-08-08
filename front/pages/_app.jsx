import '../css/index.css'
import Store from '../store/context'
import {useReducer,useContext} from 'react'
import reducer from '../store/reducer'
import Head from 'next/head'
const App=({Component})=>{
    const globalContext=useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)
    console.log('store')
    console.log(state)
    console.log('dispatch')
    console.log(dispatch)
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <Store.Provider value={{state,dispatch}}>
            <Component/>{/*우리가 만든 모든 것이 components에 위치한다.  */}
        </Store.Provider>
        </>
    )
}
export default App