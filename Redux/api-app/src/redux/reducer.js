import {ALL_PAID,DELETE_PRODUCT, MINEST_QUENTITY,ADD_QUENTITY, ADD_TO_CARDLIST, ADD_TO_LIST, REQUEST_FAILD, REQUEST_SECCUS, SEND_REQUEST, ADD_USERS, ADD_CORRECT_USER, LOG_OUT, PAY_ALL, PAIED_PRODUCT, DELETE_ALL_PAIED_PRODUCT, CARTEGORY_SEARCH_VALL, IS_SEARCHING, FALSE_SEARCHING, GO_TO_PROFILE, GO_TO_STOR } from "./actiontyps"

const appstate = {
  
  
        looding :false,
        Apidata:[],
        error:'',
        singleproduct:{},
        cardList:[],
        userslist:[],
        user:{},
        logingin :false,
        ispayement:false,
        categorysearchvall:'',
        issearching:false,
        isprofile:false,
        seledproducts:[]
    
}


const appreducer = (state = appstate,action)=> {
    switch(action.type){
        case SEND_REQUEST:return{
            ...state,looding:true
        }
        case REQUEST_SECCUS:return{
            ...state,looding:false,
            Apidata:action.playoud
        }
        case REQUEST_FAILD:return{
            ...state,error:action.playoud
        }
        case ADD_TO_LIST:return{
            ...state,singleproduct:action.playoud
        }
        case ADD_TO_CARDLIST:
        const exists = [...state.cardList].find(prd=>prd.id == action.playoud.id)
        if(!exists){
            return{
                ...state,cardList:[...state.cardList,{...action.playoud,qte:1}]
            }
        }else{
             alert('already exists') 
             return state
        }
        case ADD_QUENTITY:return{
            ...state,cardList:state.cardList.map(prd=>{
                if(prd.id==action.playoud.id){
                  return  {...prd,qte:prd.qte+1}
                  
                }return prd
            })
        }
        case MINEST_QUENTITY:return{
            ...state,cardList:state.cardList.map(prd=>{
                if(prd.id==action.playoud.id){
                    if(prd.qte>1){
                        return  {...prd,qte:prd.qte-1}
                    }
                }return prd
            })
        }
        case DELETE_PRODUCT:return{
            ...state,cardList:state.cardList.filter((prd)=>prd.id!==action.playoud)  
        }
        case ADD_USERS:return{
            ...state,userslist:action.playoud
        }
        case ADD_CORRECT_USER:return{
            ...state,user:action.playoud,
            logingin:true
        }
        case LOG_OUT:return{
            ...state,logingin:false
        }
        case PAY_ALL:return{
            ...state,ispayement:true
        }
        case PAIED_PRODUCT:return {
            ...state,seledproducts:[...state.seledproducts,state.cardList.find(prd=>prd.id == action.playoud)],
            cardList: state.cardList.filter((prd) => prd.id !== Number(action.playoud))
            
        }
        case DELETE_ALL_PAIED_PRODUCT:return{
            ...state,seledproducts:[...state.seledproducts,...state.cardList],
            cardList:[]
        }
        case ALL_PAID:return{
            ...state,ispayement:false
        }
        case CARTEGORY_SEARCH_VALL:return{
            ...state,categorysearchvall:action.playoud
        }
        case IS_SEARCHING:return{
            ...state,issearching:true
        }
        case FALSE_SEARCHING:return{
            ...state,issearching:false
        }
        case GO_TO_PROFILE:return{
            ...state,isprofile:true
        }
        case GO_TO_STOR:return{
            ...state,isprofile:false
        }
            
        

        default:return state
    }

}


export default appreducer 