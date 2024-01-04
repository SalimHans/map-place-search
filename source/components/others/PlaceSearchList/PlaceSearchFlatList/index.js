import React from "react"
import { FlatList } from "react-native"

import styles from "./styles"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "~components/others/HorizontalLineSeparator"

export default function PlaceSearchFlatList({ onItemPress = () => {} }) {
  const { listSearchPlaces } = usePlacesSearch()

  // MARK: Render Methods
  function renderPlaceItem({ item }) {
    const { structured_formatting, place_id } = item || {}
    const { main_text, secondary_text } = structured_formatting || {}

    return <PlaceRow title={main_text} address={secondary_text} onPress={() => onItemPress(place_id)} />
  }

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={listSearchPlaces}
      keyExtractor={(_, index) => index}
      renderItem={renderPlaceItem}
      ItemSeparatorComponent={<HorizontalLineSeparator />}
    />
  )
}
