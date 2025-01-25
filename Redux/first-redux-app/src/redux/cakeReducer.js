import { BUY_CAKE } from "./cakeTypes"
const initialState = {
    counter: 10 ,
  };
// const secondstate = {
//     icecounter  10
// } 
  
  const countReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          counter: state.counter - 1, 
        };
      default:
        return state;
    }
  };
  
  export default countReducer;
  