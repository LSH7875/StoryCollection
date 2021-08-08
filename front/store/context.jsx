import {createContext} from 'react'

export const initialState ={
    List:[],
    stat:{stat1:0,stat2:0,stat3:0,stat4:0}
}

const Store = createContext(initialState);

export default Store