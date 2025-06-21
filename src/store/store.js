import { configureStore } from "@reduxjs/toolkit";
import storyReducer from './features/storySlice';
import pageReducer from './features/pageSlice'
import loginReducers from './features/enter'

export const store = configureStore({
    reducer: {
        story: storyReducer,
        page: pageReducer,
        login: loginReducers
    },
});