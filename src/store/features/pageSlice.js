import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 'home'
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;