import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";



const rootSlice = combineSlices({
    auth : authSlice,
    todo : todoSlice
})

export default rootSlice