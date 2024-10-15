import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "@/store/reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export default store;
