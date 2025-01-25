import { configureStore } from "@reduxjs/toolkit";
import users from './reducer'

const stor = configureStore({
    reducer : {users}
})
export default stor