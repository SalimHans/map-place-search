import React from "react"
import { SafeAreaView, View } from "react-native"

import MapView from "react-native-maps"

import styles from "./styles"
import Utils from "~constants/Utils"

import { PlaceSearchList } from "~components/others"

export default function Home() {
  function renderMapOverlay() {
    return (
      <SafeAreaView style={styles.mapOverlay}>
        <PlaceSearchList />
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
