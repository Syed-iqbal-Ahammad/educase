import { configureStore } from '@reduxjs/toolkit'
import { emailSlice } from './features/Email/EmailSlice'
import { nameSlice } from './features/Name/NameSlice'
export const store = configureStore({
  reducer: {
    email: emailSlice.reducer,
    name: nameSlice.reducer,
  },
})