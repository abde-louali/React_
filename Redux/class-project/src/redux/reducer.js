import { ADD_STAGIRE, DELETE_STAGAIRE, EDIT_STAGAIRE, UPDATE_STAGAIRE } from "./actionstype"

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

const appreducer = (state = initialstate,action)=>{
    switch(action.type){
        case ADD_STAGIRE:return{
            ...state,stagaire:[...state.stagaire,action.playoud]
        }
        case DELETE_STAGAIRE:return{
            ...state,stagaire:[...state.stagaire].filter(stg=>stg.num!==action.playoud)
        }
        case EDIT_STAGAIRE:return{
            ...state,stg:[...state.stagaire].find(stg=>stg.num===action.playoud),
            isedite:true
        }
        case UPDATE_STAGAIRE:return{
            ...state,stagaire:[...state.stagaire].map((stg)=>{
                if(stg.num == action.playoud.num){
                    return action.playoud
                }return stg
            }),
            isedite:false
        }
        default :return state
    }
}
export default appreducer