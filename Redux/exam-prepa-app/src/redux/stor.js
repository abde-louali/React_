import { configureStore } from "@reduxjs/toolkit";
import reduserApp from "./reducer";

const stor = configureStore({
    reducer:reduserApp
})
export default stor