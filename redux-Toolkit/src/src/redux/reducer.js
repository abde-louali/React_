import { createSlice } from "@reduxjs/toolkit"


const initialstate = {
     stagaire:[
        {
            num:'1',
            name:'',
            filier:'',
        }
     ],
     stg:{
       
     },
     isedite:false
}
const appreducer = createSlice({
    name :'stgs',
    initialState:initialstate,
    reducers:{
        addstg:(state,action)=>{
            state.stagaire.push(action.payload)
        },
        deletstg:(state,action)=>{
            state.stagaire = state.stagaire.filter(stg=>stg.num!== action.payload)
        },
        editstg:(state,action)=>{
           state.stg = state.stagaire.find(stg=>stg.num===action.payload)
           state.isedite=true
        },
        updatestg:(state,action)=>{
            state.stagaire = state.stagaire.map(stg=>{
                if(stg.num == action.payload.num){
                    return action.payload
                }
                return stg
            })
            state.isedite=false
        }

    }
})
export default appreducer.reducer
export const {addstg,deletstg,editstg,updatestg} = appreducer.actions
