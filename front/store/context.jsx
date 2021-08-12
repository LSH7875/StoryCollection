import {createContext} from 'react'

export const initialState ={
    List:[
        {'id':'1-1','stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-2','stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-3','stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-4','stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-5','stat1':0,'stat2':0,'stat3':0,'stat4':0}
],
    stat:{stat1:0,stat2:0,stat3:0,stat4:0},
    buttonkey:Infinity
}

const Store = createContext(initialState);

export default Store