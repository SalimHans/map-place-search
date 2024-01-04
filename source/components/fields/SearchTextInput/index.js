import React from "react"

import { TextareaItem } from "@ant-design/react-native"

import styles from "./styles"

export default function SearchTextInput({ style, ...rest }) {
  return <TextareaItem placeholder="Search" style={[styles.searchInput, style]} clear {...rest} />
}
