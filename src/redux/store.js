import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from './feature/userSlice'; // nijer slice
import { api } from './feature/api/apiSlice'; // RTK Query apiSlice
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userReducer,
    [api.reducerPath]: api.reducer,
  }); 

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // kon kon state persist hobe
  };
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  });

export const persistor = persistStore(store);

