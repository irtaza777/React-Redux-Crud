import { configureStore } from "@reduxjs/toolkit";
import userReducers from '../Features/Crud/users'
export const store = configureStore({

reducer:userReducers
})