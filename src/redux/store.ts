import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import mode from '@/redux/slices/themeModeSlice'

export const store = configureStore({
  reducer: {
    mode
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch