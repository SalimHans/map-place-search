import React from "react"
import store from "~redux/store"

import { Home } from "~screens"

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
