import React, { useCallback } from "react"
import { FlatList, View } from "react-native"

import { debounce } from "lodash"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles"
import { fetchPlacesBySearchInput } from "~redux/state/places/placesSlice"

import { SearchTextInput } from "~components/fields"
import { PlaceRow } from "~components/rows"
import HorizontalLineSeparator from "../HorizontalLineSeparator"

export default function PlaceSearchList({}) {
  const dispatch = useDispatch()
  const { listSearchPlaces } = useSelector((state) => state.places)

  const searchPlaceDebounce = useCallback(debounce(handleSearchInputChange, 500), [])

  // MARK: Events
  function handleSearchInputChange(value) {
    dispatch(fetchPlacesBySearchInput())
  }

  // MARK: Render Methods
  function renderPlaceItem({ item, index }) {
    // TODO
    return <PlaceRow title={"Place Name"} address="Jalan Test, 1, Kuala Lumpur" />
  }

  return (
    <View style={styles.container}>
      <SearchTextInput style={styles.searchTextInput} onChange={searchPlaceDebounce} />
      <FlatList
        style={styles.placeFlatList}
        contentContainerStyle={styles.placeFlatListContent}
        data={listSearchPlaces}
        keyExtractor={(_, index) => index}
        renderItem={renderPlaceItem}
        ItemSeparatorComponent={<HorizontalLineSeparator />}
      />
    </View>
  )
}
