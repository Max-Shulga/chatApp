import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "@/store/reducers";
import { chatsApi } from "@/store/chatsApi";
import { authApi } from "@/store/authApi";
import { messagesApi } from "@/store/messagesApi";
import { upworkApi } from "@/store/upworkApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      upworkApi.middleware,
      chatsApi.middleware,
      messagesApi.middleware,
    ),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export default store;
