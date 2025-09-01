import React from "react";
import { Text, View } from "react-native";
import "../global.css";
import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";

const RootLayout = () => {
  return (
    <SafeScreen>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </SafeScreen>
  );
};

export default RootLayout;
