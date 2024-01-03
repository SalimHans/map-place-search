import React from "react"
import { SafeAreaView, View } from "react-native"

import MapView from "react-native-maps"

import styles from "./styles"
import { GlobalStyles } from "~helpers/GlobalStyles"
import Utils from "~constants/Utils"

import { PlaceSearchList } from "~components/others"
import { PlaceCard } from "~components/cards"

export default function Home() {
  function renderMapOverlay() {
    return (
      <SafeAreaView style={styles.mapOverlay}>
        <PlaceSearchList />
        <View style={GlobalStyles.flex} />
        <PlaceCard style={styles.placeCard} />
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
