import ScreenLayout from "@/components/ScreenLayout";
import WelcomeImage from "@/assets/images/logo.png";
import React from "react";

const Page3 = ({ onPress }: { onPress: () => void }) => {
  return (
    <ScreenLayout
      image={WelcomeImage}
      title="Your Data is Secure"
      description="We use advanced encryption to keep your financial information safe and private."
      buttonLabel="Get Started"
      currentPage={3}
      onPress={onPress}
    />
  );
};

export default Page3;
