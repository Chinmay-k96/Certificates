import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./shared/stateReducer";

const store = configureStore({
  reducer: {
    cert: rootReducer
  }, // Set the rootReducer here
});

export default store;
