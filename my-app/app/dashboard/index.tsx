import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
  ProgressBarAndroidBase,
  Pressable,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { PieChart, BarChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";

const CashTrackDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Goal");
  const [showDropdown, setShowDropdown] = useState(false);

  const options = ["Goal", "Limit"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  // Static data for demonstration
  const userData = {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    totalBalance: "$4,258.75",
    monthlyBudget: "$2,500.00",
    monthlySpent: "$1,842.36",
  };

  const categories = [
    { name: "Food", spent: 420, limit: 600, color: "#FF9F40" },
    { name: "Transport", spent: 210, limit: 300, color: "#546E7A" },
    { name: "Shopping", spent: 350, limit: 500, color: "#FF6B6B" },
    { name: "Entertainment", spent: 120, limit: 200, color: "#4ECDC4" },
    { name: "Bills", spent: 480, limit: 550, color: "#45B7D1" },
    { name: "Others", spent: 262.36, limit: 350, color: "#9966CC" },
  ];

  const recentTransactions = [
    {
      id: 1,
      title: "Grocery Shopping",
      category: "Food",
      amount: 86.75,
      date: "Today, 10:30 AM",
      icon: "shopping-cart",
      type: "expense",
    },
    {
      id: 2,
      title: "Uber Ride",
      category: "Transport",
      amount: 24.5,
      date: "Today, 09:15 AM",
      icon: "taxi",
      type: "expense",
    },
    {
      id: 3,
      title: "Netflix Subscription",
      category: "Entertainment",
      amount: 15.99,
      date: "Yesterday",
      icon: "film",
      type: "expense",
    },
    {
      id: 4,
      title: "Salary",
      category: "Income",
      amount: 2500,
      date: "Aug 28",
      icon: "dollar",
      type: "income",
    },
    {
      id: 5,
      title: "Coffee with Friends",
      category: "Food",
      amount: 18.25,
      date: "Aug 27",
      icon: "coffee",
      type: "expense",
    },
  ];

  const screenWidth = Dimensions.get("window").width;

  // Sample data for charts
  const categoryData = [
    {
      name: "Food",
      amount: 420,
      color: "#FF9F40",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Transport",
      amount: 210,
      color: "#546E7A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Shopping",
      amount: 350,
      color: "#FF6B6B",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Entertainment",
      amount: 120,
      color: "#4ECDC4",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Bills",
      amount: 480,
      color: "#45B7D1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  const dailyExpenseData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [65, 45, 80, 40, 56, 72, 35],
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  // Function to render category progress bars
  const renderCategoryBars = () => {
    return categories.map((category, index) => {
      const percentage = (category.spent / category.limit) * 100;
      return (
        <View key={index} className="mb-4">
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-700 font-medium">{category.name}</Text>
            <Text className="text-gray-600">
              ${category.spent} / ${category.limit}
            </Text>
          </View>
          <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <View
              className="h-full rounded-full"
              style={{
                width: `${percentage}%`,
                backgroundColor: category.color,
              }}
            />
          </View>
        </View>
      );
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-4">
        {/* Header with user profile and notification */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <Image
              source={{ uri: userData.avatar }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View>
              <Text className="text-gray-500 text-sm">Welcome back,</Text>
              <Text className="text-lg font-bold text-gray-900">
                {userData.name}
              </Text>
            </View>
          </View>
          <TouchableOpacity className="relative">
            <FontAwesome name="bell" size={24} color="#4B5563" />
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
              <Text className="text-white text-xs">3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View className="bg-white rounded-2xl p-5 shadow-lg mb-6">
          <Text className="text-gray-500 mb-2">Total Balance</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-6">
            {userData.totalBalance}
          </Text>
          <View className="flex-row justify-between mt-4">
            <View>
              <Text className="text-gray-500 text-sm mb-1">Monthly Budget</Text>
              <View className="flex-row items-center gap-2">
                <FontAwesome name="arrow-circle-o-up" color="green" size={28} />
                <Text className="text-lg font-semibold text-gray-900">
                  {userData.monthlyBudget}
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500 text-sm mb-1">
                Spent This Month
              </Text>
              <View className="flex-row items-center gap-2">
                <FontAwesome name="arrow-circle-o-down" color="red" size={28} />
                <Text className="text-lg font-semibold text-gray-900">
                  {userData.monthlySpent}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Expense Chart */}
        <View className="bg-white rounded-2xl p-5 shadow-lg mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-gray-900">
              Expense Overview
            </Text>
            <View className="border border-gray-300 rounded-md px-3 py-2">
              <Text className="text-gray-700 text-sm">Today</Text>
            </View>
          </View>

          <View>
            <PieChart
              data={categoryData}
              width={screenWidth - 40}
              height={200}
              chartConfig={chartConfig}
              accessor={"amount"}
              backgroundColor={"transparent"}
              paddingLeft={"0"}
              center={[10, 0]}
              absolute
            />
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-lg mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-gray-900">
              Expense Limit
            </Text>
            <TouchableOpacity
              className="border border-gray-300 rounded-md px-3 py-2 flex-row justify-between items-center gap-2"
              onPress={() => setShowDropdown(!showDropdown)}>
              <Text className="text-gray-700">{selectedOption}</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#4B5563"
              />
            </TouchableOpacity>

            {showDropdown && (
              <View className="absolute top-12 right-0 w-32 bg-white border border-gray-300 rounded-md shadow-md z-50">
                {options.map((option) => (
                  <Pressable
                    key={option}
                    className="px-3 py-2"
                    onPress={() => handleSelect(option)}>
                    <Text className="text-gray-700">{option}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          <View>
            {Array.from({ length: 3 }).map((_, i) => (
              <View
                key={i}
                className="flex-row items-center bg-white rounded-xl shadow-lg p-3 mb-3">
                {/* Icon box */}
                <View className="bg-red-600 w-10 h-10 rounded-lg items-center justify-center mr-3">
                  <FontAwesome name="bell" size={18} color="white" />
                </View>

                {/* Content */}
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800">
                    Food
                  </Text>

                  {/* Progress + Label */}
                  <View className="flex-row items-center justify-between">
                    <Progress.Bar
                      progress={600 / 800}
                      width={210}
                      style={{ backgroundColor: "#e5e7eb" }} // light gray track
                      borderWidth={0}
                      color="#b91c1c" // muted red fill
                    />
                    <Text className="text-xs text-gray-600">600/800</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Transactions */}
        <View className="bg-white rounded-2xl p-5 shadow-lg mb-10">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-gray-900">
              Recent Transactions
            </Text>
            <TouchableOpacity className="border border-gray-300 rounded-md px-3 py-2">
              <Text className="text-gray-700 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {recentTransactions.map((transaction) => (
            <View
              key={transaction.id}
              className="flex-row items-center py-3 bg-white rounded-xl shadow-lg p-3 mb-3">
              <View className="bg-red-600 w-10 h-10 rounded-lg items-center justify-center mr-3">
                <FontAwesome name="bell" size={18} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">
                  {transaction.title}
                </Text>
                <Text className="text-gray-500 text-sm">
                  {transaction.category} • {transaction.date}
                </Text>
              </View>
              <Text
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
                {transaction.type === "income" ? "+" : "-"}${transaction.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add Transaction Button */}
      <TouchableOpacity className="absolute bottom-6 right-6 bg-blue-600 w-16 h-16 rounded-full items-center justify-center shadow-lg">
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CashTrackDashboard;
