import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {eventsSlice} from './events/eventsSlice';
import {uiSlice} from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    events: eventsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
