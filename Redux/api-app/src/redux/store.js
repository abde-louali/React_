import { configureStore } from "@reduxjs/toolkit";
import appreducer from "./reducer";

const stor = configureStore({
    reducer:appreducer
})


export default stor