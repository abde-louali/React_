import { ADD_USER, DELETE_USER, EDITE_USER, UPDATE_USER } from "./actions";

export  function Adduser (data){
    return {
        type:ADD_USER,
        playlod:data
    }
}
export  function deletuser (id){
    return {
        type:DELETE_USER,
        playlod:id
    }
}
export  function edituser (id){
    return {
        type:EDITE_USER,
        playlod:id
    }
}
export  function Updateuser (data){
    return {
        type:UPDATE_USER,
        playlod:data
    }
}