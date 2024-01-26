import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomePage from '../screens/HomePage';

//Hello Hirusha Geeganage
const Stack = createStackNavigator();


const AppNavigation = () => {
  return (

    <NavigationContainer>

  <Stack.Navigator screenOptions={{
      headerShown:false,

  }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{
        cardStyleInterpolator:CardStyleInterpolators.forBottomSheetAndroid
      }} />
      <Stack.Screen name='Home' component={HomePage}/>
      

    </Stack.Navigator>
 </NavigationContainer>
 
  )
}

export default AppNavigation