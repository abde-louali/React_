export  const FETCH_STG_REQUEST = 'FETCH_STG_REQUEST';
export  const FETCH_STG_SUCSSES = 'FETCH_STG_SUCSSES';
export  const FETCH_STG_FAILURE = 'FETCH_STG_FAILURE';
const initial = {
    loading : false ,
    stagiaires : [] ,
    error: ""
    
}

export default function ReducerStg(state=initial,action){
    switch(action.type){
        case FETCH_STG_FAILURE :return {loading:false,stagiaires:[],error:action.payload};
        case FETCH_STG_SUCSSES :return {loading:false,stagiaires:action.payload,error:""};
        case FETCH_STG_REQUEST :return {loading:true,stagiaires:[],error:""};
        default : return state;
    }
}