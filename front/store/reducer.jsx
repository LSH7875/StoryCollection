const reducer=(state,action)=>{
    console.log('reducer들어옴')
    switch(action.type){
        case "PLUSLIST":
            console.log('pluslist들어옴')
            return {...state,List:{...action.payload}}
        case "SUMSTAT" :
            console.log("섬스탯?")
            console.log('페이로드값')
            console.log(action.payload)
            return{...state,stat:{...action.payload}}
        case "TEST":
            console.log('reducer 도착')
            return{
                ...state
            }
        default:
            return state;
            
    }
}

export default reducer