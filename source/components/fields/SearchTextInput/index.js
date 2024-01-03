import React from "react"
import { TextInput } from "react-native"

import styles from "./styles"

export default function SearchTextInput({ style, ...rest }) {
  return <TextInput placeholder="Search" style={[styles.searchInput, style]} {...rest} />
}
