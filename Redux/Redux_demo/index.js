
const redux = require('redux')
const createStore = redux.createStore
const conbine = redux.combineReducers
const reduxlogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()
function Add_product(){
  return   {
        type:'ADD_PRODUCT',

        info:'first redux action'
  }
}
function Sub_product(){
    return   {
          type:'SUB_PRODUCT',
          
          info:'first redux action'
    }
  }
const initialState = {
    counter : 1,
 
}
const secondeState ={
    counter2: 10
}

const reducer1 =(state = initialState,action)=>{
   switch (action.type){
    case 'ADD_PRODUCT' :
       return  {...state,counter:state.counter + 1}; 
    default :   
    return state
   }
   
}
const reducer2 =(state = secondeState,action)=>{
    switch (action.type){
     case 'SUB_PRODUCT' :
         return {...state,counter2:state.counter2 -1}  
     default :   
     return state
    }
    
 }
const resusers = conbine({
    count1:reducer1,
    count2:reducer2,

})
const stor = createStore(resusers,applyMiddleware(logger))
console.log('initial data is ', stor.getState())
const call = stor.subscribe(()=>{})
stor.dispatch(Add_product())
stor.dispatch(Add_product())
stor.dispatch(Sub_product())
stor.dispatch(Sub_product())

call()


