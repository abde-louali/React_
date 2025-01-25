
import { ADD_USER, UPDATE_USER } from "./Actiontypyes";
import { DELETE_USER } from "./Actiontypyes";

export function adduser(data){
    return{
        type:ADD_USER,
        playoud:data
    }
}
export function deleteu(id){
    return {
        type:DELETE_USER,
        playoud:id
    }
}
export function Updateuser(data){
    return{
        type:UPDATE_USER,
        playoud:data
    }
}