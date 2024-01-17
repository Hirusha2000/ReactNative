import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import 'react-native-gesture-handler';
import MainScreen from './src/navigation_examples/MainScreen';
import TextNavigation from './src/navigation_examples/TextNavigation';
import { DefaultTheme, PaperProvider } from 'react-native-paper';



function App(): React.JSX.Element {


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orrange',
      secondary: 'yellow',
    },
  };

  return (

    <PaperProvider>
    <View style={styles.container}>



 <AppNavigation/>


    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    position:'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },

  welText:{
fontSize:50,
color:'#3A8BF8',
fontWeight:'600',
marginTop:120,
marginLeft:30


  }
})

export default App;
