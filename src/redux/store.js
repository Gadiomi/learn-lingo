import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { teachersReducer } from './Teachers/TeachersSlice';
import { AuthSliceReducer } from './Auth/AuthSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  teachers: teachersReducer,
  Auth: AuthSliceReducer,
});

const persistConfig = {
  key: 'teachers',
  storage,
  whitelist: ['teachers', 'Auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
