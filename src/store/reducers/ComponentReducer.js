import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'


const entityAdapter = createEntityAdapter();

const initialState = [];

export const componentSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        add: (state, action) => {
            const newComponent = action.payload;
            const isAdded = state.find(component => component.widgetName == newComponent.widgetName);
            if(!isAdded) state.push(newComponent) ;            
        },
        update: (state, action) => {
            const newComponent = action.payload;
            const componentIndex = state.findIndex(component => component.widgetName == newComponent.widgetName);
            state = [
                ...state.slice(0, componentIndex),
                newComponent,
                ...state.slice(componentIndex + 1)
            ];          
        },
    },
})

// Action creators are generated for each case reducer function
export const { update, add } = componentSlice.actions;

export default componentSlice.reducer;