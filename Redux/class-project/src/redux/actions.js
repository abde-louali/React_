import { ADD_STAGIRE, DELETE_STAGAIRE, EDIT_STAGAIRE, UPDATE_STAGAIRE } from "./actionstype";

export function addstg(stg){
   return{
    type:ADD_STAGIRE,
    playoud:stg
   }
}
export function deletstg(num){
    return{
     type:DELETE_STAGAIRE,
     playoud:num
    }
 }
 export function editstg(num){
    return{
     type:EDIT_STAGAIRE,
     playoud:num
    }
 }
 export function updatestg(data){
    return{
     type:UPDATE_STAGAIRE,
     playoud:data
    }
 }