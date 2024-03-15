import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    },
    reducers: {
        saveMessage: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.message = action.payload.message;
        },
    }
});


// Action creators are generated for each case reducer function
export const { saveMessage } = messagesSlice.actions;