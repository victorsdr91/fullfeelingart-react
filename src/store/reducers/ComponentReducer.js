import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        update: (state, action) => {
           return action.payload || {};
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = componentSlice.actions;

export default componentSlice.reducer;