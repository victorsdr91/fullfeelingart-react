import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logged: (state, action) => {
           return action.payload || {};
        },
    },
})

// Action creators are generated for each case reducer function
export const { logged } = userSlice.actions;

export default userSlice.reducer;