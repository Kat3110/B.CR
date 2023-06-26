import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "services";
import { middleware } from "./middleware";
import auth from "./auth";
import project from "./project";
import template from "./template";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [api.reducerPath, "project", "template"],
};

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth,
  project,
  template,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

export const persistor = persistStore(store);
