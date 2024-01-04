import React from "react"

import { Provider } from "react-redux"
import { Provider as AntDesignProvider } from "@ant-design/react-native"
import { PersistGate } from "redux-persist/integration/react"

import store, { persistor } from "~redux/store"

import { Home } from "~screens"

export default function App() {
  return (
    <AntDesignProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </AntDesignProvider>
  )
}
