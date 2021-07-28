import {createContext} from 'react'

export const initialState ={
    list:[]
}

const Store = createContext(initialState)

export default Store