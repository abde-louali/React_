const redux = require('redux')
const createstore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default


const FETCH_API_REQUEST =  'FETCH_API_REQUEST ';
const FETCH_API_SUCCESS =  'FETCH_API_SUCCESS ';
const FETCH_API_FAIL =  'FETCH_API_FAIL ';
const initialstate = {
    loading :false,
    data :[],
    error:''
}

function REQUEST_API(){
    return {
        type:'FETCH_API_REQUEST',
        
    }
}
function REQUEST_SUCCESS (){
    return {
        type:'FETCH_API_SUCCESS',
        playod:data
    }
}
function REQUEST_FAIL(){
    return {
        type:'FETCH_API_FAIL',
        playod:error
    }
}

const reducer = (state = initialstate ,action)=>{
    switch(action.type){
        case FETCH_API_REQUEST:
            return {...state,
                loading : true
            }
        case FETCH_API_SUCCESS:
            return {...state,
                loading : true,
                date:action.playod,
                error:""
            }   
        case FETCH_API_FAIL:
            return {...state,
                loading : true,
                date:[],
                error:""
            }      
    }
}

const fetchusers =()=>{
    return function(dispatch){
        dispatch(REQUEST_API())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const datas = res.data.map(user=>user.id)
            dispatch(REQUEST_SUCCESS(datas))
        })
        .catch((error)=>{
            dispatch(REQUEST_FAIL(error.message))
        })
    }
}


const store = createstore(reducer,applyMiddleware(thunkMiddleware))
const call = store.subscribe(()=>{console.log(store.getState())})
stor.dispatch(fetchusers)
call()

