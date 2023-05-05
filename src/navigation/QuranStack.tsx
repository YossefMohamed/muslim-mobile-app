import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "../components/typography";
import ChapterScreen from "../screens/chapter/ChapterScreen";
import JuzaScreen from "../screens/juza/JuzaScreen";
import QuranScreen from "../screens/quran/QuranScreen";
import VerseScreen from "../screens/verse/VerseScreen";

const QuranStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="QuranScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="QuranScreen" component={QuranScreen} />
      <Stack.Screen name="JuzaScreen" component={JuzaScreen} />
      <Stack.Screen name="VerseScreen" component={VerseScreen} />

      <Stack.Screen name="ChapterScreen" component={ChapterScreen} />
    </Stack.Navigator>
  );
};

export default QuranStack;
