import React, { useCallback, useState } from "react"
import { FlatList, View } from "react-native"

import { debounce } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { ActivityIndicator } from "@ant-design/react-native"

import styles from "./styles"
import { fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"

import { SearchTextInput } from "~components/fields"
import { PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "../HorizontalLineSeparator"

export default function PlaceSearchList({}) {
  const dispatch = useDispatch()
  const { isLoading, listSearchPlaces } = useSelector((state) => state.places)

  const [searchText, setSearchText] = useState(null)

  const searchPlaceDebounce = useCallback(debounce(searchPlace, 500), [])

  // MARK: Events
  function handleSearchInputChange(value) {
    setSearchText(value)
    searchPlaceDebounce(value)
  }

  // MARK: Helpers
  function searchPlace(value) {
    dispatch(fetchPlacesBySearchInput(value))
  }

  // MARK: Render Methods
  function renderPlaceItem({ item, index }) {
    // TODO
    return <PlaceRow title={"Place Name"} address="Jalan Test, 1, Kuala Lumpur" />
  }

  return (
    <View style={styles.container}>
      <SearchTextInput
        style={styles.searchTextInput}
        value={searchText}
        onChangeText={handleSearchInputChange}
      />
      {!isLoading ? (
        <FlatList
          style={styles.placeFlatList}
          contentContainerStyle={styles.placeFlatListContent}
          data={listSearchPlaces}
          keyExtractor={(_, index) => index}
          renderItem={renderPlaceItem}
          ItemSeparatorComponent={<HorizontalLineSeparator />}
        />
      ) : (
        <View style={styles.loadingRow}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  )
}
