import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit";
import { postReducer } from "./slice/postSlice";

const rootReducer = combineReducers({
  posts: postReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkType = ThunkAction<
  void,
  AppRootStateType,
  unknown,
  Action<string>
>;
