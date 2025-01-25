import { configureStore } from "@reduxjs/toolkit";
import appreducer from "./reducer";
const loogermidlware = store=>{
    return next =>{
        return action=>{
            const resault = next(action)
            console.log("midlware caught" + JSON.stringify(resault) );
            return resault
            
        }
    }
}
const stor = configureStore({
    reducer:appreducer,
    middleware:(getDefaultMidleware) => getDefaultMidleware().concat(loogermidlware)
})

export default stor