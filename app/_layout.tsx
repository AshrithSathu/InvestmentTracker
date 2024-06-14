import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Allocations",
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="account-tree"
              size={size}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Accounts",
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="account-balance"
              size={size}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocations",
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="account-tree"
              size={size}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
