import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Marry Doe',
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.value = action.payload
    },
    clearName: (state) => {
      state.value = ''
    },
  },
})

export const { setName, clearName } = nameSlice.actions
export default nameSlice.reducer
