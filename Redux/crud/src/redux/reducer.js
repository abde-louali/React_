import { ADD_USER, DELETE_USER, EDITE_USER, UPDATE_USER } from "./actions"
const users = {
  usersList : [

  ],
  user:{

  },
  isedited:false

}

const initialreducer = (state = users,action) =>{
    switch(action.type){
       case ADD_USER : return {
        ...state,usersList:[...state.usersList,action.playlod]
        }
        case DELETE_USER : return {
          ...state,usersList:[...state.usersList].filter(user=>user.id !== action.playlod)
        }
        case EDITE_USER :
          const selectedUser = [...state.usersList].find(user=>user.id == action.playlod);
          return{
          ...state,user:selectedUser,
                isedited:true
        }
        case UPDATE_USER:
         const newlist = [...state.usersList].map((userO)=>{
          if(userO.id == state.user.id){
            return action.playlod
          }return userO
        })
        return {
          ...state,usersList:newlist,
          isedited:false
          
        }
       default : return state 
    }
}



export default initialreducer
