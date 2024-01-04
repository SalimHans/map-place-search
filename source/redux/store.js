import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist"
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
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export default store
