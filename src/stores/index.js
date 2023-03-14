import { configureStore } from '@reduxjs/toolkit'
import wetherSlice from './wetherSlice'


export const store = configureStore({
  reducer: {
    wether:wetherSlice
  },
})