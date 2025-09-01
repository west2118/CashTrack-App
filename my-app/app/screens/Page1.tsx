import ScreenLayout from "@/components/ScreenLayout";
import WelcomeImage from "@/assets/images/logo.png";
import React from "react";
import { router } from "expo-router";

const Page1 = ({ onPress }: { onPress: () => void }) => {
  return (
    <ScreenLayout
      image={WelcomeImage}
      title="Welcome to Finance Tracker"
      description="Take control of your money with ease and confidence."
      buttonLabel="Next"
      currentPage={1}
      onPress={onPress}
      onSkip={() => router.push("/auth" as any)}
    />
  );
};

export default Page1;
