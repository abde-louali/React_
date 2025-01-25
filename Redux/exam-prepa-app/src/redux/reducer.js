import { ADD_USER, CLICK_SEARCH_USER, CLICK_SEARCH_USER_TO_FALSE, DELETE_USER, SEARCH_USER, UPDATE_USER } from "./actionstype"

const initialstate = {
      list:[
],
      searchVall :'',
      issearch:false
}

const reduserApp = (state=initialstate,action)=>{
    switch(action.type){
        case ADD_USER:return{
            ...state,list:[...state.list,action.playoud]
        }
        case SEARCH_USER:return{
            ...state,searchVall:action.playoud,
        }
        case CLICK_SEARCH_USER:return{
            ...state,issearch:true
        }
        case CLICK_SEARCH_USER_TO_FALSE:return{
            ...state,issearch:false
        }
        case UPDATE_USER:return{
            ...state,list:[...state.list].map(user=>{
                if(user.cin == action.playoud.cin ){
                    return action.playoud
                }
                return user
            })
        }
        case DELETE_USER:return{
            ...state,list:[...state.list].filter(user=>user.cin !== action.playoud)
        }
        default:return state
    }
}
export default reduserApp