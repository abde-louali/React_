import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    dataus:[{
        cin:'dd102',
        name:'abdes',
        age:'20'
    }],
    isedited:false,
    // user:{},
    id:''
}

const appreduser = createSlice({
      name:'users',
      initialState:initialstate,
      reducers:{
        getusers:(state,action)=>{
            state.dataus = action.payload
        },
        edited:(state,action)=>{
            // state.user=state.dataus.find(usr=>usr.id==action.payload) 
            state.id = action.payload
            state.isedited=true
           
        },
        updateuser:(state,action)=>{
            state.dataus.map(user=>{
                if(user.id == action.payload.id){
                    return action.payload
                }
                return user
            })
        }
      }

})
export default appreduser.reducer 
export const  {getusers,edited,updateuser} = appreduser.actions 
