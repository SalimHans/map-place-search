import React, { useCallback, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"

import { debounce } from "lodash"
import { ActivityIndicator } from "@ant-design/react-native"

import styles from "./styles"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { SearchTextInput } from "~components/fields"
import { PlaceHistoryRow, PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "../HorizontalLineSeparator"

export default function PlaceSearchList({ style }) {
  const { isLoading, listSearchPlaces, listSearchHistory, fetchPlacesByInput } = usePlacesSearch()

  const [searchText, setSearchText] = useState(null)

  const searchPlaceDebounce = useCallback(debounce(searchPlace, 500), [])

  useEffect(() => {
    // Only start searching if text is more than 2 to save API call
    if (searchText && searchText?.length > 2) {
      searchPlaceDebounce(searchText)
    }
  }, [searchText])

  // MARK: Helpers
  function searchPlace(value) {
    fetchPlacesByInput(value)
  }

  // MARK: Render Methods
  function renderPlaceItem({ item }) {
    const { structured_formatting } = item || {}
    const { main_text, secondary_text } = structured_formatting || {}

    return <PlaceRow title={main_text} address={secondary_text} />
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
    <View style={[styles.container, style]}>
      <SearchTextInput style={styles.searchTextInput} value={searchText} onChangeText={setSearchText} />
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
