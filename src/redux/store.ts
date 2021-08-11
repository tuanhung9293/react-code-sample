import { configureStore } from '@reduxjs/toolkit';
import ui from './uiSlice';
import todos from './todoSlice';

export const store = configureStore({
  reducer: {
    ui,
    todos,
  }
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;