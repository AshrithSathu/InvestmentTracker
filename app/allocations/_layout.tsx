import { Link, Stack } from "expo-router";

export default function allocationslayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: "New Allocations",
        }}
      />
    </Stack>
  );
}
