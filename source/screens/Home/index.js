import React from "react"
import { View } from "react-native"

import MapView from "react-native-maps"

import styles from "./styles"
import Utils from "~constants/Utils"

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} initialRegion={Utils.DEFAULT_MAP_REGION} />
    </View>
  )
}
