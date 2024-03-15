import { configureStore } from '@reduxjs/toolkit'
import { messagesSlice } from './messages/messagesSlice'

export const store = configureStore({
reducer: {
    messages: messagesSlice.reducer,
},
})