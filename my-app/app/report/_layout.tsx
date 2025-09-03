import SafeScreen from "@/components/SafeScreen";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <SafeScreen>
      <Stack
        screenOptions={{
          headerTitle: "Reports", // sets the top title
          headerShown: true, // show the header
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "white" },
        }}
      />
    </SafeScreen>
  );
};

export default _layout;
