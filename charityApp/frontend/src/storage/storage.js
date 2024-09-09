import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";



export const storage = configureStore({
  reducer: {
    userReducer
  }
})