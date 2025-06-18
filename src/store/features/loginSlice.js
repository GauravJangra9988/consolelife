import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: true,
    isLoginFormOpen: false

};

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        setLoginStatus: (state,action) => {
            state.isLoggedin = action.payload;
        },
        openLoginForm: (state) =>{
            state.isLoginFormOpen = true;
        },
        closeLoginForm: (state) =>{
            state.isLoginFormOpen = false;
        }
    }
});


export const {
    setLoginStatus,
    openLoginForm,
    closeLoginForm
} = loginSlice.actions;

export default loginSlice.reducer;