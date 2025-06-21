import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false,
    isEnterFormOpen: false,
    isRegisterFormOpen: false,


};

const enterSlice = createSlice({
    name:'enter',
    initialState,
    reducers: {
        setLoggedinStatus: (state,action) => {
            state.isLoggedin = action.payload;
        },
        openEnterForm: (state) =>{
            state.isEnterFormOpen = true;
        },
        closeEnterForm: (state) =>{
            state.isEnterFormOpen = false;
        },
        setFormRegister: (state,action)=>{
            state.isRegisterFormOpen = action.payload;
        }
        
    }
});


export const {
    setLoggedinStatus,
    openEnterForm,
    closeEnterForm,
    setFormRegister
} = enterSlice.actions;

export default enterSlice.reducer;