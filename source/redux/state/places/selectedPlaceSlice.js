import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  selectedPlaceDetails: {}
}

// Action Thunks
const fetchPlaceDetailsByPlaceId = createAsyncThunk(
  "places/fetchPlaceDetails",
  async (args, { rejectWithValue }) => {
    const { placeId, googleAPIKey } = args || {}

    try {
      const params = {
        place_id: placeId,
        key: googleAPIKey
      }

      const res = await axios("https://maps.googleapis.com/maps/api/place/details/json", { params })
      const { data } = res || {}

      if (data?.status !== "OK") {
        throw new Error(data?.error_message)
      }

      return data?.result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const appConfigSlice = createSlice({
  name: "selectedPlace",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaceDetailsByPlaceId.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPlaceDetailsByPlaceId.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.selectedPlaceDetails = payload
    })
    builder.addCase(fetchPlaceDetailsByPlaceId.rejected, (state, action) => {
      state.isLoading = false
      state.selectedPlaceDetails = {}
    })
  }
})

export { fetchPlaceDetailsByPlaceId }
export default appConfigSlice.reducer
