import React from "react";
import { Text, View, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import Gradient from "react-native-css-gradient";

export default function Dark(props) {
  const { width, height } = Dimensions.get("window");

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
        <Text style={tailwind("text-white text-4xl font-bold mt-6")}>
          Brime Live
        </Text>
      </Gradient>
    </View>
  );
}
