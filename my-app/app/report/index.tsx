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

const ReportPage = () => {
  const [selectedOption, setSelectedOption] = useState("Goal");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Income", "Expense"];

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
        <View className="flex-row gap-4 mb-6 items-center shadow-lg">
          {/* Tabs Container */}
          <View className="flex-1 p-1 bg-gray-100 rounded-full">
            <View className="flex-row">
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  className={`flex-1 py-2 rounded-full items-center justify-center ${
                    activeTab === tab ? "bg-blue-600" : ""
                  }`}>
                  <Text
                    className={`text-md font-medium ${
                      activeTab === tab ? "text-white" : "text-gray-700"
                    }`}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Filter Button */}
          <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center shadow-lg">
            <FontAwesome name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Expense Chart */}
        <View className="flex-col gap-4 mb-6">
          <View className="bg-white rounded-2xl p-5 shadow-lg">
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

          <View className="flex-row gap-4">
            {/* Card 1 */}
            <View className="bg-white rounded-2xl p-5 shadow-lg flex-1">
              <View className="flex-row justify-between items-center mb-2 gap-2">
                <Text className="text-sm">Total Income</Text>
                <TouchableOpacity className="w-8 h-8 items-center justify-center">
                  <FontAwesome
                    name="arrow-circle-o-up"
                    size={20}
                    color="green"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-2xl font-semibold">$10,000</Text>
                <Text className="text-green-600 text-sm mt-1">
                  + 12.3% from last month
                </Text>
              </View>
            </View>

            {/* Card 2 */}
            <View className="bg-white rounded-2xl p-5 shadow-lg flex-1">
              <View className="flex-row justify-between items-center mb-2 gap-2">
                <Text className="text-sm">Total Expenses</Text>
                <TouchableOpacity className="w-8 h-8 items-center justify-center">
                  <FontAwesome
                    name="arrow-circle-o-down"
                    size={20}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-2xl font-semibold">$5,000</Text>
                <Text className="text-red-600 text-sm mt-1">
                  + 8% from last month
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View className="mb-10">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-900">
              Transactions
            </Text>
          </View>

          <View className="flex-col gap-2">
            <View className="flex-col gap-2">
              <View>
                <Text>September 3, 2025</Text>
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
                    {transaction.type === "income" ? "+" : "-"}$
                    {transaction.amount}
                  </Text>
                </View>
              ))}
            </View>
            <View className="flex-col gap-2">
              <View>
                <Text>September 3, 2025</Text>
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
                    {transaction.type === "income" ? "+" : "-"}$
                    {transaction.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
