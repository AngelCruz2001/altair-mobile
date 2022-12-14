import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from '../../data';
import {IEvent, IEvents} from '../../interfaces/event.interface';
import {RootState, AppThunk} from '../store';
export interface UIState {
  events: IEvent[] | null;
  activeEvent: IEvent | null;
}

const initialState: UIState = {
  events: null,
  activeEvent: null,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEvent[] | null>) => {
      state.events = action.payload;
    },
    toogleFavoriteEvent: (state, action: PayloadAction<number>) => {
      const event = state.events?.find(event => event.id === action.payload);
      if (event) {
        event.isFavorite = !event.isFavorite;
      }
    },
    setActiveEvent: (state, action: PayloadAction<IEvent | null>) => {
      state.activeEvent = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setEvents, toogleFavoriteEvent, setActiveEvent} =
  eventsSlice.actions;
