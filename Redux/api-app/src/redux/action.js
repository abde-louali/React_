import { ADD_CORRECT_USER, ADD_QUENTITY, ADD_TO_CARDLIST, ADD_TO_LIST, ADD_USERS, ALL_PAID, CARTEGORY_SEARCH_VALL, DELETE_ALL_PAIED_PRODUCT, DELETE_PRODUCT, FALSE_SEARCHING, GO_TO_PROFILE, GO_TO_STOR, IS_SEARCHING, LOG_OUT, MINEST_QUENTITY, PAIED_PRODUCT, PAY_ALL, REQUEST_FAILD, REQUEST_SECCUS, SEND_REQUEST } from "./actiontyps"

export function sendRequest(url){
   return {
    type:SEND_REQUEST,
    playoud:url
   }
}
export function Requestsucces(data){
    return {
        type:REQUEST_SECCUS,
        playoud:data
    }
}
export function Requestfaild(error){
    return{
        type:REQUEST_FAILD,
        playoud:error
    }
}
export function Addlist(data){
    return{
        type:ADD_TO_LIST,
        playoud:data
    }
}
export function AddTcart(Prd){
    return{
        type:ADD_TO_CARDLIST,
        playoud:Prd
    }
}
export function Addquentity(obj){
    return{
        type:ADD_QUENTITY,
        playoud:obj
    }
}
export function Minquentity(obj){
    return{
        type:MINEST_QUENTITY,
        playoud:obj
    }
}
export function Deletproduct(id){
    return{
        type:DELETE_PRODUCT,
        playoud:id
    }
}
export function Addusers(data){
    return{
        type:ADD_USERS,
        playoud:data
    }
}
export function Addcorrectuser(data){
    return{
        type:ADD_CORRECT_USER,
        playoud:data
    }
}
export function Logout(){
    return{
        type:LOG_OUT
    }
}
export function DeletPaiedproduct(id){
    return{
        type:PAIED_PRODUCT,
        playoud:id
    }
}
export function allpaid(){
    return{
        type:PAY_ALL 
    }
}
export function Deletallpaid(){
    return{
        type:DELETE_ALL_PAIED_PRODUCT,
        // playoud:data
    }
}
export function allpaidsucces(){
    return{
        type:ALL_PAID 
    }
}
export function Searchvall(vall){
    return{
        type:CARTEGORY_SEARCH_VALL,
        playoud:vall
    }
}
export function searching(){
    return{
        type:IS_SEARCHING
    }
}
export function falsesearching(){
    return{
        type:FALSE_SEARCHING
    }
}
export function Goprofile(){
    return{
        type:GO_TO_PROFILE
    }
}
export function Backtostor(){
    return{
        type:GO_TO_STOR
    }
}