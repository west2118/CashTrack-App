import React, { useEffect } from "react";
import PageLogo from "@/assets/images/logo.png";
import { Image, Text, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={PageLogo} className="w-64 h-64 mb-2" />
      <Text className="text-2xl font-bold text-brand">CashTrack</Text>
      <Text className="text-brand">Manage your expenses</Text>
    </View>
  );
};

export default LoadingScreen;
