import React from "react"
import { Text, View } from "react-native"

import styles from "./styles"

export default function PlaceRow({ style, title = "", address = "" }) {
  return (
    <View style={[styles.row, style]}>
      <Text style={styles.placeTitle}>{title}</Text>
      <Text style={styles.placeAddress}>{address}</Text>
    </View>
  )
}
