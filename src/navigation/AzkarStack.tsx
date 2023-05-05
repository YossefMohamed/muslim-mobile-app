import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AzkarScreen from "../screens/azkar/AzkarScreen";
import SingleAzkarScreen from "../screens/singleAzkar/SingleAzkarScreen";

const AzkarStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="AzkarScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AzkarScreen" component={AzkarScreen} />
      <Stack.Screen name="SingleAzkarScreen" component={SingleAzkarScreen} />
    </Stack.Navigator>
  );
};

export default AzkarStack;
