import axios from "axios"
import { persistReducer } from "redux-persist"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"

const persistConfig = {
  key: "places",
  storage: AsyncStorage,
  whitelist: ["listSearchHistory"]
}

const initialState = {
  isLoading: false,
  listSearchPlaces: [],
  listSearchHistory: []
}

// Action Thunks
const fetchPlacesBySearchInput = createAsyncThunk("places/fetchPlaces", async (args) => {
  const { searchText, googleAPIKey } = args || {}
  // TODO: We are just using jsonplaceholder for testing
  // TODO: Change this to autocomplete
  const res = await axios("https://jsonplaceholder.typicode.com/users")
  return res?.data
})

const appConfigSlice = createSlice({
  name: "places",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlacesBySearchInput.pending, (state, { meta }) => {
      const { searchText } = meta?.arg || {}
      state.isLoading = true

      // Only push if item is not in the array already
      if (!state.listSearchHistory.some((item) => item?.toLowerCase() === searchText?.toLowerCase())) {
        state.listSearchHistory.push(searchText)
      }
    })
    builder.addCase(fetchPlacesBySearchInput.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.listSearchPlaces = payload
    })
    builder.addCase(fetchPlacesBySearchInput.rejected, (state, action) => {
      state.isLoading = false
      state.listSearchPlaces = []
    })
  }
})

export { fetchPlacesBySearchInput }
export default persistReducer(persistConfig, appConfigSlice.reducer)
