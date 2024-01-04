import { persistStore } from "redux-persist"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import placeReducer from "./state/places/placesSlice"
import selectedPlaceReducer from "./state/places/selectedPlaceSlice"

const rootReducer = combineReducers({
  places: placeReducer,
  selectedPlace: selectedPlaceReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
export default store
