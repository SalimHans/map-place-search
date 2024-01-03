import React from "react"
import { FlatList, View } from "react-native"

import styles from "./styles"

import { SearchTextInput } from "~components/fields"
import { PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "../HorizontalLineSeparator"

export default function PlaceSearchList({}) {
  // MARK: Render Methods
  function renderPlaceItem({ item, index }) {
    // TODO
    return <PlaceRow title={"Place Name"} address="Jalan Test, 1, Kuala Lumpur" />
  }

  return (
    <View style={styles.container}>
      <SearchTextInput style={styles.searchTextInput} />
      <FlatList
        style={styles.placeFlatList}
        contentContainerStyle={styles.placeFlatListContent}
        data={[1, 2, 3]} // TODO
        keyExtractor={(_, index) => index}
        renderItem={renderPlaceItem}
        ItemSeparatorComponent={<HorizontalLineSeparator />}
      />
    </View>
  )
}
