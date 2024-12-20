import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "@/store/reducers";
import { chatsApi } from "@/store/api/chatsApi";
import { authApi } from "@/store/api/authApi";
import { messagesApi } from "@/store/api/messagesApi";
import { upworkApi } from "@/store/api/upworkApi";

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
