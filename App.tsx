import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Navigation from "./src/Navigation/Navigation"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar />
          <Navigation />
      </GestureHandlerRootView>
    </Provider>
  );
}
