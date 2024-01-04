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
const fetchPlacesBySearchInput = createAsyncThunk("places/fetchPlaces", async (args, { rejectWithValue }) => {
  const { searchText, googleAPIKey } = args || {}

  try {
    const params = {
      input: searchText,
      types: "establishment", // Only search for establishments,
      key: googleAPIKey
    }

    const res = await axios("https://maps.googleapis.com/maps/api/place/autocomplete/json", { params })
    const { data } = res || {}

    if (data?.status !== "OK") {
      throw new Error(data?.error_message)
    }

    return data?.predictions
  } catch (error) {
    return rejectWithValue(error)
  }
})

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    resetSeachHistory: (state) => {
      state.listSearchHistory = []
    }
  },
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
    builder.addCase(fetchPlacesBySearchInput.rejected, (state) => {
      state.isLoading = false
      state.listSearchPlaces = []
    })
  }
})

export { fetchPlacesBySearchInput }
export const { resetSeachHistory } = placesSlice.actions
export default persistReducer(persistConfig, placesSlice.reducer)
