import ScreenLayout from "@/components/ScreenLayout";
import WelcomeImage from "@/assets/images/logo.png";
import React from "react";
import { router } from "expo-router";

const Page2 = ({ onPress }: { onPress: () => void }) => {
  return (
    <ScreenLayout
      image={WelcomeImage}
      title="Take Control of Your Finances"
      description="Manage your spending, track your income, and achieve financial freedom with confidence."
      buttonLabel="Next"
      currentPage={2}
      onPress={onPress}
      onSkip={() => router.push("/auth" as any)}
    />
  );
};

export default Page2;
