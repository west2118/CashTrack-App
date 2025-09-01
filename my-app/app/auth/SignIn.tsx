import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <View className="flex-1 justify-center px-6 py-16">
        {/* Logo and Header */}
        <View className="items-center mb-10">
          <Text className="text-3xl font-bold ">CashTrack</Text>
          <Text className="text-lg text-gray-600 mt-2">
            Track your expenses effortlessly
          </Text>
        </View>

        {/* Login Form */}
        <View className="mt-10">
          <Text className="text-2xl font-semibold text-gray-900 mb-6">
            Sign In
          </Text>

          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Email address
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-6 w-full">
            <Text className="text-sm font-medium text-gray-700">Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
              placeholder="Enter your password"
              secureTextEntry
            />

            <View className="mt-2 w-full ">
              <TouchableOpacity>
                <Text className="text-sm font-medium text-right">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/dashboard")}
            className="bg-blue-600 py-3 rounded-lg mb-6">
            <Text className="text-white text-center font-semibold text-base">
              Sign in
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="px-3 text-gray-500">Or continue with</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          <View className="flex-row justify-center gap-4">
            <TouchableOpacity className="border border-gray-300 p-3 w-14 items-center rounded-full">
              <FontAwesome name="google" size={26} />
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 p-3 w-14 items-center rounded-full">
              <FontAwesome name="facebook" size={26} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 p-3 w-14 items-center rounded-full">
              <FontAwesome name="apple" size={26} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign up section */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/SignUp")}>
            <Text className="text-blue-600 font-medium">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
