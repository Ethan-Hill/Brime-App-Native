import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import Welcome from "../components/Welcome";

import { useNavigation } from "@react-navigation/native";
import store from "../store/index";
import { setColorMode } from "../store/actions/index";

export default function HomeScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);

  const state = store.getState();

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    await store.dispatch(setColorMode(isEnabled ? "light" : "dark"));
  };

  const navigation = useNavigation();

  const gradient = isEnabled
    ? `linear-gradient(135deg, rgba(69,60,239,1) 0%, rgba(159,56,147,1) 50%, rgba(254,53,54,1) 100%)`
    : `linear-gradient(180deg, rgba(20,21,34,1) 0%, rgba(35,42,78,1) 50%, rgba(20,21,34,1) 100%)`;

  return (
    <View>
      <Welcome
        enabled={isEnabled}
        navigation={navigation}
        onChange={toggleSwitch}
        gradient={gradient}
        colorMode={state.colorMode}
      />
    </View>
  );
}
