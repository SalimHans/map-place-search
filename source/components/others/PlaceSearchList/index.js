import React, { useCallback, useState } from "react"
import { FlatList, Text, View } from "react-native"

import { debounce } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { ActivityIndicator } from "@ant-design/react-native"

import styles from "./styles"
import { fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"

import { SearchTextInput } from "~components/fields"
import { PlaceHistoryRow, PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "../HorizontalLineSeparator"

export default function PlaceSearchList({}) {
  const dispatch = useDispatch()
  const { isLoading, listSearchPlaces, listSearchHistory } = useSelector((state) => state.places)

  const [searchText, setSearchText] = useState(null)

  const searchPlaceDebounce = useCallback(debounce(searchPlace, 500), [])

  // MARK: Events
  function handleSearchInputChange(value) {
    setSearchText(value)

    if (value) {
      searchPlaceDebounce(value)
    }
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

  function renderSearchHistoryItem({ item }) {
    return <PlaceHistoryRow title={item} onPress={() => setSearchText(item)} />
  }

  function renderContentLists() {
    return searchText ? (
      <FlatList
        style={styles.placeFlatList}
        contentContainerStyle={styles.placeFlatListContent}
        data={listSearchPlaces}
        keyExtractor={(_, index) => index}
        renderItem={renderPlaceItem}
        ItemSeparatorComponent={<HorizontalLineSeparator />}
      />
    ) : (
      <FlatList
        style={styles.placeFlatList}
        contentContainerStyle={styles.placeFlatListContent}
        data={listSearchHistory}
        keyExtractor={(_, index) => index}
        renderItem={renderSearchHistoryItem}
        ListHeaderComponent={
          listSearchHistory && listSearchHistory.length ? (
            <Text style={styles.searchHistory}>Search History</Text>
          ) : null
        }
        ItemSeparatorComponent={<HorizontalLineSeparator />}
      />
    )
  }

  return (
    <View style={styles.container}>
      <SearchTextInput
        style={styles.searchTextInput}
        value={searchText}
        onChangeText={handleSearchInputChange}
      />
      {!isLoading ? (
        renderContentLists()
      ) : (
        <View style={styles.loadingRow}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  )
}
