import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children }: { children: any }) => {
  const insets = useSafeAreaInsets();

  return <View style={{ paddingTop: insets.top, flex: 1 }}>{children}</View>;
};

export default SafeScreen;
