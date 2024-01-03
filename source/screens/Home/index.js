import React from "react"
import { View } from "react-native"

import styles from "./styles"

import MapView from "react-native-maps"

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 3.1319,
          longitude: 101.6841,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  )
}
