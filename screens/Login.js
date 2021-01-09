import React from "react";
import { View } from "react-native";
import store from "../store/index";
import Login from "../components/Login";

export default function LoginScreen() {
  const state = store.getState();

  const gradient =
    state.colorMode === "dark"
      ? `linear-gradient(135deg, rgba(69,60,239,1) 0%, rgba(159,56,147,1) 50%, rgba(254,53,54,1) 100%)`
      : `linear-gradient(180deg, rgba(20,21,34,1) 0%, rgba(35,42,78,1) 50%, rgba(20,21,34,1) 100%)`;

  return (
    <View>
      <Login gradient={gradient} colorMode={state.colorMode} />
    </View>
  );
}
