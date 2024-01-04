import Config from "react-native-config"
import { useDispatch, useSelector } from "react-redux"

import { fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"

export default () => {
  const dispatch = useDispatch()
  const { isLoading, listSearchPlaces, listSearchHistory } = useSelector((state) => state.places)

  async function fetchPlacesByInput(input) {
    dispatch(fetchPlacesBySearchInput({ searchText: input, googleAPIKey: Config.GOOGLE_MAPS_API_KEY }))
  }

  return {
    isLoading,
    listSearchPlaces,
    listSearchHistory,

    fetchPlacesByInput
  }
}
