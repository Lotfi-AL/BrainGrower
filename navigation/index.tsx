/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SwitchGame from "../screens/SwitchGame";
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {7

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            />
          <Stack.Screen
            options={{animation:'slide_from_right'}}
            name="SwitchGame"
            component={SwitchGame}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
