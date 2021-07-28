import'../index.css'
import Head from 'next/head'
import Store from '../store/context'
import {useReducer,useContext} from 'react'
import reducer from '../store/reducer'
const App=({Component})=>{
    const globalContext=useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)
    return (
        <>
        <Store.Provider value ={{state,dispatch}}/>
            <Component/>/{/*우리가 만든 모든 것이 components에 위치한다.  */}
        <Store.Provider/>
        </>
    )
}
export default App