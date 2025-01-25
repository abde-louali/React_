import { createSlice } from "@reduxjs/toolkit";
const login = {
    listusers:[
        
    ]
}
const reduccer = createSlice({
    name :'users',
    initialState:login,
    reducers:{
        adduser:(state,action)=>{
            state.listusers.push(action.payload)
        },
        deletuser:(state,action)=>{
            state.listusers = state.listusers.filter(stg=>stg.cin!== action.payload)
        },
        updateuser:(state,action)=>{
            state.listusers = state.listusers.map(stg=>{
                if(stg.cin == action.payload.cin){
                    return action.payload
                }
                return stg
            })

        }
    }
})
export default reduccer.reducer
export const {adduser,deletuser,updateuser} = reduccer.actions





