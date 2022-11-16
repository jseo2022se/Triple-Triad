import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        setInfo: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setInfo } = userSlice.actions

export default userSlice.reducer