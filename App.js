import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/screens/Login/login';
import Home from './src/screens/Home/home';
import NewPost from './src/screens/NewPost/newPost';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // transitionSpec:{open:fromLeft, close:fromRight}
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // transitionSpec:{open:fromLeft, close:fromRight}
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          headerShown: false,
          // transitionSpec:{open:fromLeft, close:fromRight}
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
