import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import ReducerStg from "./reducer";
//creer un middleWare
const testMiddleWare = (state,getState)=>{
    return  (dispatch)=>{
           return (action)=>{
            const res = dispatch(action);
            console.log(JSON.stringify(res));
            return res;

           }
    }
}
// Store
export  const store = createStore(ReducerStg,applyMiddleware(testMiddleWare));