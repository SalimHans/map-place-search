import React from "react"
import { Text, View } from "react-native"

import styles from "./styles"

export default function PlaceHistoryRow({ style, title = "" }) {
  return (
    <View style={[styles.row, style]}>
      <Text style={styles.placeTitle}>{title}</Text>
    </View>
  )
}
