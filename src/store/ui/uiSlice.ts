import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../store';
import {theme} from '../../theme/globalTheme';
export interface UIState {
  theme: typeof theme | null;
  isDarkMode: boolean;
}

const initialState: UIState = {
  theme: null,
  isDarkMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<typeof theme | null>) => {
      state.theme = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setTheme} = uiSlice.actions;
