import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { PieChart, BarChart } from "react-native-chart-kit";

const CashTrackDashboard = () => {
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
        <View className="bg-white rounded-2xl p-5 shadow-xl mb-6">
          <Text className="text-gray-500 mb-2">Total Balance</Text>
          <Text className="text-4xl font-bold text-gray-900 mb-4">
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
        <View className="bg-white rounded-2xl p-5 shadow-xl mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">
              Expense Overview
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {/* Chart visualization */}
          {/* <View className="flex-row items-end h-40 justify-between mb-6 px-4">
            <View className="items-center">
              <View
                className="w-8 bg-red-400 rounded-t-lg"
                style={{ height: 100 }}
              />
              <Text className="text-xs mt-1 text-gray-500">Food</Text>
            </View>
            <View className="items-center">
              <View
                className="w-8 bg-blue-400 rounded-t-lg"
                style={{ height: 60 }}
              />
              <Text className="text-xs mt-1 text-gray-500">Transport</Text>
            </View>
            <View className="items-center">
              <View
                className="w-8 bg-yellow-400 rounded-t-lg"
                style={{ height: 120 }}
              />
              <Text className="text-xs mt-1 text-gray-500">Shopping</Text>
            </View>
            <View className="items-center">
              <View
                className="w-8 bg-green-400 rounded-t-lg"
                style={{ height: 40 }}
              />
              <Text className="text-xs mt-1 text-gray-500">Bills</Text>
            </View>
            <View className="items-center">
              <View
                className="w-8 bg-purple-400 rounded-t-lg"
                style={{ height: 80 }}
              />
              <Text className="text-xs mt-1 text-gray-500">Entertainment</Text>
            </View>
          </View> */}
          <View>
            {/* Category Pie Chart */}
            <View>
              <PieChart
                data={categoryData}
                width={screenWidth - 40}
                height={200}
                chartConfig={chartConfig}
                accessor={"amount"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 0]}
                absolute
              />
            </View>

            {/* Daily Expense Bar Chart */}
            {/* <View className="mt-6">
              <Text className="text-lg font-bold mb-2">Daily Expenses</Text>
              <BarChart
                data={dailyExpenseData}
                width={screenWidth - 40}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={0}
                fromZero={true}
              />
            </View> */}
          </View>

          {/* Category progress bars */}
          {renderCategoryBars()}
        </View>

        {/* Recent Transactions */}
        <View className="bg-white rounded-2xl p-5 shadow-xl mb-10">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">
              Recent Transactions
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 text-sm">See All</Text>
            </TouchableOpacity>
          </View>

          {recentTransactions.map((transaction) => (
            <View
              key={transaction.id}
              className="flex-row items-center py-3 border-b border-gray-100 last:border-b-0">
              <View
                className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
                  transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                }`}>
                <FontAwesome
                  size={18}
                  color={transaction.type === "income" ? "#10B981" : "#EF4444"}
                />
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
