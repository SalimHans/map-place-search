import React, { useCallback, useEffect, useState } from "react"
import { View } from "react-native"

import { debounce } from "lodash"
import { ActivityIndicator, Toast } from "@ant-design/react-native"

import styles from "./styles"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { SearchTextInput } from "~components/fields"
import PlaceSearchHistoryFlatList from "./PlaceSearchHistoryFlatList"
import PlaceSearchFlatList from "./PlaceSearchFlatList"

export default function PlaceSearchList({ style }) {
  const { isFetchingPlaces, fetchPlacesByInput, fetchPlaceDetailsById, resetListSearchPlaces } =
    usePlacesSearch()

  const [searchText, setSearchText] = useState(null)

  const searchPlaceDebounce = useCallback(debounce(searchPlace, 500), [])

  useEffect(() => {
    // Only start searching if text is more than 2 to save API call
    if (searchText && searchText?.length > 2) {
      searchPlaceDebounce(searchText)
    }
  }, [searchText])

  async function onPlaceItemPressHandler(placeId) {
    try {
      await fetchPlaceDetailsById(placeId)
      setSearchText(null)
      resetListSearchPlaces()
    } catch (error) {
      Toast.info({ duration: 2, content: error?.message })
    }
  }

  // MARK: Helpers
  async function searchPlace(value) {
    try {
      await fetchPlacesByInput(value)
    } catch (error) {
      Toast.info({ duration: 2, content: error?.message })
    }
  }

  // MARK: Render Methods
  function renderContentLists() {
    return searchText ? (
      <PlaceSearchFlatList onItemPress={onPlaceItemPressHandler} />
    ) : (
      <PlaceSearchHistoryFlatList onItemPress={setSearchText} />
    )
  }

  return (
    <View style={[styles.container, style]}>
      <SearchTextInput style={styles.searchTextInput} value={searchText} onChangeText={setSearchText} />
      {!isFetchingPlaces ? (
        renderContentLists()
      ) : (
        <View style={styles.loadingRow}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  )
}
