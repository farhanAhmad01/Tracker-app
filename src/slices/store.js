import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootReducer";



const store = configureStore({
    reducer: rootSlice
})


export default store;