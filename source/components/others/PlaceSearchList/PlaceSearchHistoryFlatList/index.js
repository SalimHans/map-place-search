import React from "react"
import { FlatList, Text } from "react-native"

import styles from "./styles"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceHistoryRow } from "~components/rows"
import HorizontalLineSeparator from "~components/others/HorizontalLineSeparator"

export default function PlaceSearchHistoryFlatList({ onItemPress = () => {} }) {
  const { listSearchHistory } = usePlacesSearch()

  // MARK: Render Methods
  function renderSearchHistoryItem({ item }) {
    return <PlaceHistoryRow title={item} onPress={() => onItemPress(item)} />
  }

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
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
