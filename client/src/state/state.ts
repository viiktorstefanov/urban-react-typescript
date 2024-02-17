import { configureStore } from "@reduxjs/toolkit";
import authReducer from './users/authSlice';
import tattooReduceer from './tattoos/tattooSlice';
import menuReducer from './menuSlice';

export const state = configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer,
        tattoos: tattooReduceer,
    },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;