import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6 py-10">
          {/* Logo and Header */}
          <View className="items-center mb-8">
            <Text className="text-3xl font-bold text-gray-900">CashTrack</Text>
            <Text className="text-lg text-gray-600 mt-1">
              Create your account
            </Text>
          </View>

          {/* Sign Up Form */}
          <View className="mt-10">
            <Text className="text-2xl font-semibold text-gray-900 mb-6">
              Sign Up
            </Text>

            <View className="flex-row mb-4">
              <View className="flex-1 mr-2">
                <Text className="text-sm font-medium text-gray-700 mb-1">
                  First Name
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
                  placeholder="First name"
                />
              </View>
              <View className="flex-1 ml-2">
                <Text className="text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
                  placeholder="Last name"
                />
              </View>
            </View>

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

            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Password
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
                placeholder="Create a password"
                secureTextEntry
              />
            </View>

            <View className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500"
                placeholder="Confirm your password"
                secureTextEntry
              />
            </View>

            <View className="flex-row items-center mb-4">
              <TouchableOpacity className="w-5 h-5 border border-gray-300 rounded-md mr-2 flex items-center justify-center">
                <View className="w-3 h-3 bg-blue-600 rounded-sm" />
              </TouchableOpacity>
              <Text className="text-sm text-gray-600">
                I agree to the{" "}
                <Text className="text-blue-600">Terms of Service</Text> and{" "}
                <Text className="text-blue-600">Privacy Policy</Text>
              </Text>
            </View>

            <TouchableOpacity className="bg-blue-600 py-3 rounded-lg mb-6">
              <Text className="text-white text-center font-semibold text-base">
                Create Account
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="px-3 text-gray-500">Or sign up with</Text>
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

          {/* Sign in section */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/SignIn")}>
              <Text className="text-blue-600 font-medium">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
