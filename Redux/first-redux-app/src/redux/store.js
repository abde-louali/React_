import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./cakeReducer";

const stor = configureStore(
   { reducer:countReducer})
export default stor