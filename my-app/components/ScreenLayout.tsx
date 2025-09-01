import { totalPages } from "@/constants/helper";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ScreenLayoutProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  onPress: () => void;
  buttonLabel: string;
  currentPage: number;
  onSkip?: () => void;
};

const ScreenLayout = ({
  image,
  title,
  description,
  onPress,
  buttonLabel,
  currentPage,
  onSkip,
}: ScreenLayoutProps) => {
  return (
    <View className="flex-1 justify-between px-6 py-16 bg-white">
      {/* Skip button at top-right */}
      {onSkip && (
        <TouchableOpacity
          onPress={onSkip}
          className="absolute top-10 right-6 z-10">
          <Text className="text-gray-500 font-medium">Skip</Text>
        </TouchableOpacity>
      )}

      {/* Top & Center content */}
      <View className="flex-1 justify-center">
        <View className="flex items-center justify-center">
          <Image
            source={image}
            className="w-64 h-64 mb-6"
            resizeMode="contain"
          />
        </View>
        <Text className="text-2xl font-bold mb-2">{title}</Text>
        <Text className="text-gray-600 mb-6">{description}</Text>

        {/* Pagination Dots */}
        <View className="flex-row mb-4 mt-6 flex items-center justify-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <View
              key={index}
              className={`rounded-full mx-1 ${
                index + 1 === currentPage
                  ? "w-4 h-4 bg-brand"
                  : "w-3 h-3 bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>

      {/* Button fixed at the bottom */}
      <TouchableOpacity
        onPress={onPress}
        className="bg-brand px-6 py-3 rounded-lg">
        <Text className="text-white font-medium text-center">
          {buttonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenLayout;
