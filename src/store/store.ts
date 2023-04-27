import { configureStore, ThunkAction,Action } from '@reduxjs/toolkit';
import cryptoReducer from './criptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<any>>;

