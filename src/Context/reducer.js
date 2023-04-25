import* as actions from "./ActionTypes"


export  const reducer =(state,action)=>{
   switch(action.type){
    case actions.ADD_PRODUCT_TO_CART :
        return (
            [...state , action.payload]
        )
    case actions.REMOVE_PRODUCT_FROM_CART :
        return (
            
            state.filter((cart)=> cart.id !== action.payload.id )
        )
        case action.REMOVE_ALL_PRODUCT_FROM_CART :
            return (
                state.filter((el)=> el.id !== action.payload.id)
            )
    default: return state
   }
}