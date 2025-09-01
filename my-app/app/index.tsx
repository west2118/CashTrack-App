import React, { useEffect, useState } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import { router } from "expo-router";

const index = () => {
  const [currentScreen, setCurrentScreen] = useState<
    "loading" | "page1" | "page2" | "page3"
  >("loading");

  useEffect(() => {
    if (currentScreen === "loading") {
      const timer = setTimeout(() => {
        setCurrentScreen("page1");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  switch (currentScreen) {
    case "loading":
      return <LoadingScreen />;
    case "page1":
      return <Page1 onPress={() => setCurrentScreen("page2")} />;
    case "page2":
      return <Page2 onPress={() => setCurrentScreen("page3")} />;
    case "page3":
      return <Page3 onPress={() => router.push("/auth/SignIn")} />;
    default:
      return null;
  }
};

export default index;
