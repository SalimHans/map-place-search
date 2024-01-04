import React from "react"
import { Text, View } from "react-native"

import styles from "./styles"

export default function PlaceRow({ style, title = "", address = "" }) {
  return (
    <View style={[styles.row, style]}>
      <Text style={styles.placeTitle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.placeAddress} numberOfLines={2}>
        {address}
      </Text>
    </View>
  )
}
