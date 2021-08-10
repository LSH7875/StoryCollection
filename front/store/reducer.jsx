const reducer=(state,action)=>{
    console.log('reducer들어옴')
    switch(action.type){
        case "INITIALIZE":
            return state
        case "PLUSLIST":
            console.log('pluslist들어옴')
            return {...state,List:{...action.payload}}
        case "PLUS_STAGE":
            let list= [...state.List];
            list.push(action.payload)
            return{...state,List:list}
        case "SUMSTAT" :
            console.log(action.payload)
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