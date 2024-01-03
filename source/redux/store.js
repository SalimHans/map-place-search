import { configureStore, combineReducers } from "@reduxjs/toolkit"
import placeReducer from "./state/places/placesSlice"

const rootReducer = combineReducers({
  places: placeReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
