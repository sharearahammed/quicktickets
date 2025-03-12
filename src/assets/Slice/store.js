// store.js
import { configureStore } from "@reduxjs/toolkit"
import flightReducer from "./Features/flightSlice";

const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
})

export default store
