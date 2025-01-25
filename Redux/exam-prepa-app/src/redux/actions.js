import { ADD_USER, CLICK_SEARCH_USER, CLICK_SEARCH_USER_TO_FALSE, DELETE_USER, SEARCH_USER, UPDATE_USER } from "./actionstype";

export function adduser(objet){
    return{
        type:ADD_USER,
        playoud:objet
    }
}
export function searchuser(vall){
    return{
        type:SEARCH_USER,
        playoud:vall
    }
}
export function ClickBtnSearchUser(){
    return{
        type:CLICK_SEARCH_USER
        
    }
}
export function ClickBtnSearchUserToFalse(){
    return{
        type:CLICK_SEARCH_USER_TO_FALSE
        
    }
}
export function Updateuser(user){
    return{
        type:UPDATE_USER,
        playoud:user
        
    }
}
export function Deleteuser(cin){
    return{
        type:DELETE_USER,
        playoud:cin
        
    }
}