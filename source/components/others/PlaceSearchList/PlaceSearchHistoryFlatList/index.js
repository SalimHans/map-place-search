import React from "react"
import { FlatList, Text } from "react-native"

import { Flex } from "@ant-design/react-native"

import styles from "./styles"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceHistoryRow } from "~components/rows"
import { TextButton } from "~components/buttons"
import HorizontalLineSeparator from "~components/others/HorizontalLineSeparator"

export default function PlaceSearchHistoryFlatList({ onItemPress = () => {} }) {
  const { listSearchHistory } = usePlacesSearch()

  // MARK: Render Methods
  function renderSearchHistoryItem({ item }) {
    return <PlaceHistoryRow title={item} onPress={() => onItemPress(item)} />
  }

  function renderFlatlistHeader() {
    if (!listSearchHistory || !listSearchHistory.length) {
      return null
    }

    return (
      <Flex justify="between" style={styles.headerContainer}>
        <Text style={styles.searchHistory}>Search History</Text>
        <TextButton textStyle={styles.clearHistoryButtonText} text={"Clear History"} />
      </Flex>
    )
  }

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={listSearchHistory}
      keyExtractor={(_, index) => index}
      renderItem={renderSearchHistoryItem}
      ListHeaderComponent={renderFlatlistHeader()}
      ItemSeparatorComponent={<HorizontalLineSeparator />}
    />
  )
}
