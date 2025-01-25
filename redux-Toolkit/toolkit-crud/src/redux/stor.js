import { configureStore } from "@reduxjs/toolkit";
import stgs from "./reducer";
const stor = configureStore({
    reducer:{stgs}
})

export default stor