import Config from "react-native-config"
import { useDispatch, useSelector } from "react-redux"

import { fetchPlaceDetailsByPlaceId, fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"

export default () => {
  const dispatch = useDispatch()
  const { isLoading, listSearchPlaces, listSearchHistory, selectedPlaceDetails } = useSelector(
    (state) => state.places
  )

  async function fetchPlacesByInput(input) {
    dispatch(fetchPlacesBySearchInput({ searchText: input, googleAPIKey: Config.GOOGLE_MAPS_API_KEY }))
  }

  async function fetchPlaceDetailsById(placeId) {
    dispatch(fetchPlaceDetailsByPlaceId({ placeId, googleAPIKey: Config.GOOGLE_MAPS_API_KEY }))
  }

  return {
    isLoading,
    listSearchPlaces,
    listSearchHistory,
    selectedPlaceDetails,

    fetchPlacesByInput,
    fetchPlaceDetailsById
  }
}
