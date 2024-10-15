import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key:'cart-data',
  storage
}

const persistedReducer = persistReducer(persistConfig , CartReducer)

const store = configureStore({
  reducer: {
    Cart: persistedReducer,
  },
});


export const persistor = persistStore(store);

export default store;