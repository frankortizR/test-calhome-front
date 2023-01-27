import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlices'

export const store = configureStore({
  reducer: {
    // menu: menuReducer,
    auth: authReducer
  },
})