import Config from "react-native-config"
import { useDispatch, useSelector } from "react-redux"

import { fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"
import { fetchPlaceDetailsByPlaceId } from "~redux/state/places/selectedPlaceSlice"

export default () => {
  const dispatch = useDispatch()
  const {
    isLoading: isFetchingPlaces,
    listSearchPlaces,
    listSearchHistory
  } = useSelector((state) => state.places)
  const { selectedPlaceDetails } = useSelector((state) => state.selectedPlace)

  async function fetchPlacesByInput(input) {
    try {
      await dispatch(
        fetchPlacesBySearchInput({ searchText: input, googleAPIKey: Config.GOOGLE_MAPS_API_KEY })
      ).unwrap()
    } catch (error) {
      throw error
    }
  }

  async function fetchPlaceDetailsById(placeId) {
    dispatch(fetchPlaceDetailsByPlaceId({ placeId, googleAPIKey: Config.GOOGLE_MAPS_API_KEY }))
  }

  return {
    isFetchingPlaces,
    listSearchPlaces,
    listSearchHistory,
    selectedPlaceDetails,

    fetchPlacesByInput,
    fetchPlaceDetailsById
  }
}
