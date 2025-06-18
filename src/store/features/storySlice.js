import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDialogOpen: false,
    formData: {
        title: '',
        content: '',
    }
};

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        openDialog: (state) => {
            state.isDialogOpen = true;
        },
        closeDialog: (state) => {
            state.isDialogOpen = false;
            state.formData = initialState.formData;
        },
        updateFormData: (state, action) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        }
    }
});

export const {
    openDialog,
    closeDialog,
    updateFormData
} = storySlice.actions;

export default storySlice.reducer;