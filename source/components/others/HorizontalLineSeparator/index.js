import React from "react"
import { View } from "react-native"

import styles from "./styles"

export default function HorizontalLineSeparator({ style }) {
  return <View style={[styles.line, style]} />
}
