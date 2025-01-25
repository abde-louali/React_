import { configureStore } from "@reduxjs/toolkit";
import initialreducer from "./reducer";


const stor = configureStore({
    reducer :initialreducer
})
export default stor