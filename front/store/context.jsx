import {createContext} from 'react'

export const initialState ={
    List:[
        {'id':'1-1','key':Infinity,'stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-2','key':Infinity,'stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-3','key':Infinity,'stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-4','key':Infinity,'stat1':0,'stat2':0,'stat3':0,'stat4':0},
        {'id':'1-5','key':Infinity,'stat1':0,'stat2':0,'stat3':0,'stat4':0}
],
    stat:{stat1:0,stat2:0,stat3:0,stat4:0},
    buttonkey:Infinity
}

const Store = createContext(initialState);

export default Store