import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { userApi } from '../services/UserService';
import userReducer from './reducers/UserReducer';
import componentReducer from './reducers/ComponentReducer';
import {componentApi} from "../services/ComponentService";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [componentApi.reducerPath]: componentApi.reducer,
        user: userReducer,
        components: componentReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(componentApi.middleware),
})

setupListeners(store.dispatch);