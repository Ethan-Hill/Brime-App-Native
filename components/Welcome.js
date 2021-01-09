import React from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  Switch,
  Alert,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import Gradient from "react-native-css-gradient";

export default function Welcome(props) {
  const { width, height } = Dimensions.get("window");

  function handleChange() {
    // Here, we invoke the callback with the new value
    props.onChange();
  }

  const gradient = props.gradient;

  return (
    <View
      style={tailwind(
        "flex flex-col justify-center items-center bg-gray-300 min-h-full w-full"
      )}
    >
      <Gradient
        gradient={gradient}
        style={{
          width,
          height,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          marginBottom: 4,
        }}
      >
        <Image source={require("../assets/brime_color_logo.png")} />
        <Text style={tailwind("text-white text-4xl font-bold mt-6")}>
          Brime Live
        </Text>
        <TouchableOpacity
          style={tailwind("bg-white mt-6 px-6 py-3 rounded-lg")}
          onPress={() => props.navigation.navigate("Test")}
        >
          <Text style={tailwind("text-black text-2xl font-bold")}>
            Let's Start
          </Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={props.enabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleChange}
          value={props.enabled}
          style={tailwind("absolute bottom-5 left-5 p-4")}
        />
      </Gradient>
    </View>
  );
}
