import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Marry@gmail.com',
}

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload
    },
    clearEmail: (state) => {
      state.value = ''
    },
  },
})

export const { setEmail, clearEmail } = emailSlice.actions
export default emailSlice.reducer
