import { ADD_USER, DELETE_USER, UPDATE_USER } from "./Actiontypyes";




const login = {
    listusers:[
        
    ]
}


export const reducer = (state = login,action)=>{
      switch(action.type){
        case ADD_USER :return{
            ...state,listusers:[...state.listusers,action.playoud]
        }
        case DELETE_USER:return{
            ...state,listusers:[...state.listusers].filter(user=>user.cin!==action.playoud)
        }
        case UPDATE_USER:return{
            ...state,listusers:[...state.listusers].map((user)=>{
                if(user.cin == action.playoud.cin ){
                    return action.playoud
                }return user
            })
        }
        default :return state
      }
}






