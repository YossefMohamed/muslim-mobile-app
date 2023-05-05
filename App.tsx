import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/infrastructure/theme/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeArea } from "./src/components/safeArea";
import LoginHeader from "./src/components/LoginHeader";
import LoginScreen from "./src/screens/login/Login";
import SignupScreen from "./src/screens/signup/Signup";
import HomeStack from "./src/navigation/HomeStack";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useLocationStore } from "./src/store/store";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { setLocation: setLocationFromStore } = useLocationStore();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocationFromStore(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const Stack = createStackNavigator();
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  if (!oswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{
                header(props) {
                  return;
                },
              }}
            >
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  header(props) {
                    return <LoginHeader />;
                  },
                }}
              />

              <Stack.Screen name="HomeScreen" component={HomeStack} />

              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{
                  header(props) {
                    return <LoginHeader />;
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </QueryClientProvider>
  );
}
const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.brand.dark};
`;
