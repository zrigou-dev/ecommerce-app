import { createContext, useContext, useEffect, useReducer } from "react";
import {reducer} from './reducer';
import * as actions from '../Context/ActionTypes'





const initialState = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")): [];

export const GlobalContext = createContext();
const ContextProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer , initialState);
    useEffect(()=>{
        localStorage.setItem("cart" ,JSON.stringify( state));
    })
    return <GlobalContext.Provider value={{myCart: state  ,CartDispatch: dispatch}}>{children}</GlobalContext.Provider>
};
export default ContextProvider ;

export const useCartContext =()=>{
    return useContext(GlobalContext);
}
