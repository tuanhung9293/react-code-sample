import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUi = {
  theme: TTheme;
}

const initialState: TUi = {
  theme: 'theme-default',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<TTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = uiSlice.actions;
export default uiSlice.reducer;
