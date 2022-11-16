import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user"
import uniqueCardReducer from "./slices/uniqueCard"

export default configureStore({
    reducer: {
        user: userReducer,
        uniqueCard: uniqueCardReducer
    }
})