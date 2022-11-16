import { createSlice } from "@reduxjs/toolkit";

export const uniqueCardSlice = createSlice({
    name: "uniqueCard",
    initialState: {
        uniqueCard: []
    },
    reducers: {
        setUniqueCard: (state, action) => {
            state.uniqueCard = action.payload
        }
    }
})

export const { setUniqueCard } = uniqueCardSlice.actions

export default uniqueCardSlice.reducer