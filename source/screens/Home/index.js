import React from "react"
import { SafeAreaView, View } from "react-native"

import MapView from "react-native-maps"

import styles from "./styles"
import { GlobalStyles } from "~helpers/GlobalStyles"
import Utils from "~constants/Utils"
import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceSearchList } from "~components/others"
import { PlaceCard } from "~components/cards"

export default function Home() {
  const { selectedPlaceDetails } = usePlacesSearch()

  const { name: selectedPlaceName, formatted_address: selectedPlaceAddress } = selectedPlaceDetails || {}

  function renderMapOverlay() {
    return (
      <SafeAreaView style={styles.mapOverlay}>
        <PlaceSearchList />
        <View style={GlobalStyles.flex} />
        {selectedPlaceDetails ? (
          <PlaceCard
            style={styles.placeCard}
            placeName={selectedPlaceName}
            placeAddress={selectedPlaceAddress}
          />
        ) : null}
      </SafeAreaView>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} initialRegion={Utils.DEFAULT_MAP_REGION} />
      {renderMapOverlay()}
    </View>
  )
}
