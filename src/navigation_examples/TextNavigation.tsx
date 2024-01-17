import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './MainScreen';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack=createStackNavigator();
const TextNavigation = () => {
  return (
   <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='MainScreen' component={MainScreen}/>
<Stack.Screen name='ScreenA' component={ScreenA}/>
<Stack.Screen name='ScreenB' component={ScreenB}/>


</Stack.Navigator>

   </NavigationContainer>
  )
}

export default TextNavigation