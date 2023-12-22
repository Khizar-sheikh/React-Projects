import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/features/user/userSlice";
import movieReducer from "../Components/features/movie/movieSlice";

const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: customizedMiddleware,
});
