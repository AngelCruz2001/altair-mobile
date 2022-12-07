import {Dispatch} from '@reduxjs/toolkit';
import {toogleFavoriteEvent} from './eventsSlice';

export const startSetAsFavoriteEvent =
  (eventId: number) => async (dispatch: Dispatch) => {
    dispatch(toogleFavoriteEvent(eventId));
    try {
      // API call
    } catch (error) {
      // Error handling
    }
  };
