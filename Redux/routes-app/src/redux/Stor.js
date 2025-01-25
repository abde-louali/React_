import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";

const stor = configureStore({
    reducer : reducer
})
export default stor