/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { Button, ColorSchemeName, Pressable } from "react-native"
import Colors from "../constants/Colors"

import HomeScreen from "../screens/HomeScreen"
import SwitchGame from "../screens/SwitchGame/SwitchGame"
import LinkingConfiguration from "./LinkingConfiguration"

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  7

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DarkTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: Colors.yellow,
          headerStyle: {
            backgroundColor: Colors.darkblue,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation, route }) => ({
            headerTitle: "Home",
            headerRight: () => (
              <AntDesign name="user" size={24} color={Colors.yellow} />
            ),
          })}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: "SwitchGame",
            headerRight: () => (
              <AntDesign name="user" size={24} color={Colors.yellow} />
            ),
            animation: "slide_from_right",
          }}
          name="SwitchGame"
          component={SwitchGame}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
