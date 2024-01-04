import Config from "react-native-config"
import { useDispatch, useSelector } from "react-redux"

import {
  fetchPlacesBySearchInput,
  resetSeachHistory,
  resetSearchPlaces
} from "~redux/state/places/placesSlice"
import { fetchPlaceDetailsByPlaceId } from "~redux/state/places/selectedPlaceSlice"

export default () => {
  const dispatch = useDispatch()
  const {
    isLoading: isFetchingPlaces,
    listSearchPlaces,
    listSearchHistory
  } = useSelector((state) => state.places)
  const { isLoading: isFetchingPlaceDetails, selectedPlaceDetails } = useSelector(
    (state) => state.selectedPlace
  )

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
    try {
      await dispatch(
        fetchPlaceDetailsByPlaceId({ placeId, googleAPIKey: Config.GOOGLE_MAPS_API_KEY })
      ).unwrap()
    } catch (error) {
      throw error
    }
  }

  function resetListSearchPlaces() {
    dispatch(resetSearchPlaces())
  }

  function resetPlaceSearchHistory() {
    dispatch(resetSeachHistory())
  }

  return {
    isFetchingPlaces,
    listSearchPlaces,
    listSearchHistory,
    isFetchingPlaceDetails,
    selectedPlaceDetails,

    fetchPlacesByInput,
    fetchPlaceDetailsById,
    resetPlaceSearchHistory,
    resetListSearchPlaces
  }
}
