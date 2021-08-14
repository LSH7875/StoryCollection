import {initialState} from './context'


const reducer=(state,action)=>{
    console.log('reducer들어옴')
    switch(action.type){
        case "INITIALIZE":
            return initialState
        case "PLUSLIST":
            return {...state,List:{...action.payload}}
        case "PLUS_STAGE":
            let list= [...state.List];
            list[parseInt(action.payload.num)-1]=action.payload.List;
            let buttonkey=action.payload.key;
            return{...state,List:list,}
        case "SUMSTAT" :
            return{...state,stat:{...action.payload}}
        case "TEST":
            return{
                ...state
            }
        default:
            return state;
            
    }
}

export default reducer