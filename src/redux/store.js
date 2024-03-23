import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesPersist = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(favoritesPersist, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedReducer,
  },

  middleware: (getMiddleware) =>
    getMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
