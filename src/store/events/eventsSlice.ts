import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from '../../data';
import {RootState, AppThunk} from '../store';
export interface UIState {
  events: typeof data | null;
}

const initialState: UIState = {
  events: data,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<typeof data | null>) => {
      state.events = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setEvents} = eventsSlice.actions;
