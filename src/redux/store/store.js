import { configureStore } from "@reduxjs/toolkit";
import  cartSlicer  from "../slicer/slicer";

export default configureStore({
    reducer: {
            store:cartSlicer
        }
})