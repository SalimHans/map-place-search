import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  listSearchPlaces: []
}

// Action Thunks
const fetchPlacesBySearchInput = createAsyncThunk("places/fetchPlaces", async () => {
  // TODO: We are just using jsonplaceholder for testing
  // TODO: Change this to autocomplete
  const res = await axios("https://jsonplaceholder.typicode.com/users")
  return res?.data
})

const appConfigSlice = createSlice({
  name: "places",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlacesBySearchInput.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPlacesBySearchInput.fulfilled, (state, action) => {
      state.isLoading = false
      state.listSearchPlaces = action.payload
    })
    builder.addCase(fetchPlacesBySearchInput.rejected, (state, action) => {
      state.isLoading = false
      state.listSearchPlaces = []
    })
  }
})

export { fetchPlacesBySearchInput }
export default appConfigSlice.reducer
